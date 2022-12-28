const IS_INJECTED = window.location.host.startsWith('redmine');
const BASE_URL_ORIGIN = window.location.origin;
const DOMAIN_ENC = "bml2ZXVzc29sdXRpb25z"
const DOMAIN_NAME = atob(DOMAIN_ENC)
const tableBodyEl = document.querySelector('.BL_task-table > tbody');
const addNewBtnEl = document.querySelector('#BL_new-task');

if(!window.location.host.startsWith("localhost") && !window.location.host.startsWith("redmine")){
  window.location.href = `https://redmine.${DOMAIN_NAME}.com/time_entries?utf8=%E2%9C%93&set_filter=1&sort=spent_on%3Adesc&f%5B%5D=user_id&op%5Buser_id%5D=%3D&v%5Buser_id%5D%5B%5D=me&f%5B%5D=&c%5B%5D=project&c%5B%5D=spent_on&c%5B%5D=user&c%5B%5D=activity&c%5B%5D=issue&c%5B%5D=comments&c%5B%5D=hours&group_by=spent_on&t%5B%5D=hours&t%5B%5D=`;
  alert("Redirecting to Redmine time entries page...");
}

let REDMINE_API_KEY = localStorage.getItem('RKEY');
if (REDMINE_API_KEY == null || REDMINE_API_KEY.length != 40) {
  REDMINE_API_KEY = prompt(
    `Copy and paste redmine api key from\n ${BASE_URL_ORIGIN}/my/account \n > in right sidebar > click on show.`
  );
  localStorage.setItem('RKEY', REDMINE_API_KEY);
}

const selectEl = document.getElementById('activity-select');

let ROW_ELEMENT;

function createOptionsNodes(data) {
  data.time_entry_activities.map((item) => {
    const optionElement = document.createElement('option');

    optionElement.value = item.id;
    optionElement.text = item.name;

    selectEl.appendChild(optionElement);

    ROW_ELEMENT = document.querySelector('#BL_row').cloneNode(true);
  });
}

if (IS_INJECTED) {
  fetch(`${BASE_URL_ORIGIN}/enumerations/time_entry_activities.json`, {
    method: 'get',
    headers: {
      'X-Redmine-API-Key': REDMINE_API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => createOptionsNodes(data));
} else {
  createOptionsNodes(ACTIVITIES);
}

ROW_ELEMENT = document.querySelector('#BL_row').cloneNode(true);

async function fetchIssuesSearchAPI(query) {
  console.log("Searching issue: ", query)

  // return [query + 1, query + 2, query + 3, query + 4];
  try {
    const response = await fetch(`${BASE_URL_ORIGIN}/issues/auto_complete?term=${query}`, {
      method: 'GET',
      headers: {
        'X-Redmine-API-Key': REDMINE_API_KEY,
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result
    }
  } catch (err) {
    console.error(err);
  }
}

window.removeRow = function(button) {
  const row = button.parentNode.parentNode;

  row.remove();
}

window.copyRow = function(button) {
  const row = button.parentNode.parentNode;
  const clonedNode = row.cloneNode(true);

  clonedNode.cells[1].lastElementChild.value =
    row.cells[1].lastElementChild.value;
  tableBodyEl.appendChild(clonedNode);
}

addNewBtnEl.addEventListener('click', () => {
  tableBodyEl.appendChild(ROW_ELEMENT.cloneNode(true));
});

let debounceTimer;
window.handleIssueInput = function(ev) {
  console.log(ev)
  const inputVal = ev.srcElement.value;
  clearTimeout(debounceTimer);
  if (inputVal) {
    debounceTimer = setTimeout(() => {
      let dropdownEl = ev.target.nextElementSibling 
      
      dropdownEl.innerHTML = ""
      fetchIssuesSearchAPI(inputVal).then(
        data => data.map((item) => {
          const optionElement = document.createElement('option');
      
          optionElement.value = item.id;
          optionElement.text = item.label;
          dropdownEl.appendChild(optionElement);
        }
      ))
      
    }, 2000);
  }
}

function calcTotalHours() {
  let totalHours = 0;
  Array.from(tableBodyEl.children).forEach((rowEl) => {
    totalHours += parseFloat(rowEl.children[3].firstElementChild.value);
  });
  document.querySelector(
    '#total-hours'
  ).innerHTML = `Total Hours: ${totalHours}`;
}

function getTasksArrFromDOM() {
  const tasksArr = Array.from(tableBodyEl.children).map((rowEl) => {
    const issue_id =
      rowEl.children[0].firstElementChild.firstElementChild.value;
    const activity_id = rowEl.children[1].firstElementChild.value;
    const spent_on = rowEl.children[2].firstElementChild.value;
    const hours = rowEl.children[3].firstElementChild.value;
    const comments = rowEl.children[4].firstElementChild.value;

    return {
      issue_id,
      activity_id,
      spent_on,
      hours,
      comments,
    };
  });
  return tasksArr;
}

function saveTasks() {
  localStorage.setItem('savedTasks', JSON.stringify(getTasksArrFromDOM()));
}

function loadTasks() {
  const loadedTasks = JSON.parse(localStorage.getItem('savedTasks'));
  loadedTasks?.map((task) => {
    const rowEl = ROW_ELEMENT.cloneNode(true);
    rowEl.children[0].firstElementChild.firstElementChild.value = task.issue_id;
    rowEl.children[1].firstElementChild.value = task.activity_id;
    rowEl.children[2].firstElementChild.value = task.spent_on;
    rowEl.children[3].firstElementChild.value = task.hours;
    rowEl.children[4].firstElementChild.value = task.comments;
    tableBodyEl.appendChild(rowEl);
  });
}

function submitEntry(entry) {
  const time_entry = { time_entry: { ...entry } };
  fetch(`${BASE_URL_ORIGIN}/time_entries.xml`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Redmine-API-Key': REDMINE_API_KEY,
    },
    body: JSON.stringify(time_entry),
  })
    .then((resp) => console.log(resp.status))
    .catch((err) => console.log('FAILED:', err));
}
function submitTasks() {
  const tasksArr = getTasksArrFromDOM();
  tasksArr.forEach((entry) => submitEntry(entry));
}

function clearAllTasks() {
  document.querySelectorAll('#BL_row').forEach((el) => el.remove());
}

window.closeModal = function(){
  document.querySelector(".BL_modal").style.display = "none"
}

document.querySelector('#BL_loadTasks').addEventListener('click', loadTasks);
document.querySelector('#BL_saveTasks').addEventListener('click', saveTasks);
document
  .querySelector('#BL_submitTasks')
  .addEventListener('click', submitTasks);
document
  .querySelector('#BL_clearAllTasks')
  .addEventListener('click', clearAllTasks);

setInterval(calcTotalHours, 500);

console.log('Redmine Bulk Logger Loaded!');
