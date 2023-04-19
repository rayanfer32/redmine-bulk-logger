const toastifyOptions = {
  position: 'center',
  gravity: 'top', // `top` or `bottom`
  autoClose: 3000,
  text: 'Success!',
  close: true,
  style: {
    background: '#0f3443',
  },
  stopOnFocus: true, // Prevents dismissing of toast on hover
};

const HAS_BL_INSTANCE_MOUNTED =
  document.querySelector('.BL_modal')?.hasChildNodes() == true ? true : false;

if (!HAS_BL_INSTANCE_MOUNTED) {
  document.body.innerHTML += window.BL_TABLE_DOM;
  console.log('Redmine Bulk Logger is Loaded!');
} else {
  document.querySelector('.BL_modal').style.display = 'flex';
  console.log('Redmine Bulk Logger is Already Mounted!');
}

const IS_INJECTED = window.location.host.startsWith('redmine');
const BASE_URL_ORIGIN = window.location.origin;
const DOMAIN_ENC = 'bml2ZXVzc29sdXRpb25z';
const DOMAIN_NAME = atob(DOMAIN_ENC);
const SPENT_TIME_URL = `https://redmine.${DOMAIN_NAME}.com/time_entries?utf8=%E2%9C%93&set_filter=1&sort=spent_on%3Adesc&f%5B%5D=user_id&op%5Buser_id%5D=%3D&v%5Buser_id%5D%5B%5D=me&f%5B%5D=&c%5B%5D=project&c%5B%5D=spent_on&c%5B%5D=user&c%5B%5D=activity&c%5B%5D=issue&c%5B%5D=comments&c%5B%5D=hours&group_by=spent_on&t%5B%5D=hours&t%5B%5D=`;
const MY_ISSUES_URL = `https://redmine.${DOMAIN_NAME}.com/issues?utf8=%E2%9C%93&set_filter=1&sort=id%3Adesc&f%5B%5D=status_id&op%5Bstatus_id%5D=o&f%5B%5D=assigned_to_id&op%5Bassigned_to_id%5D=%3D&v%5Bassigned_to_id%5D%5B%5D=me&f%5B%5D=&c%5B%5D=project&c%5B%5D=tracker&c%5B%5D=status&c%5B%5D=priority&c%5B%5D=subject&c%5B%5D=assigned_to&c%5B%5D=updated_on&c%5B%5D=category&c%5B%5D=estimated_hours&c%5B%5D=spent_hours&c%5B%5D=cf_37&c%5B%5D=cf_40&c%5B%5D=fixed_version&group_by=&t%5B%5D=`;
const tableBodyEl = document.querySelector('.BL_task-table > tbody');
const addNewBtnEl = document.querySelector('#BL_new-task');

document.querySelector('#BL_spent_time_link').href = SPENT_TIME_URL;
document.querySelector('#BL_my_issues_link').href = MY_ISSUES_URL;

const ALLOWED_DOMAINS = ['localhost', 'redmine', '127.0.0.1'];
if (ALLOWED_DOMAINS.some((item) => window.location.host.startsWith(item))) {
  console.log('Allowed Domain.');
} else {
  window.location.href = SPENT_TIME_URL;
  alert('Redirecting to Redmine time entries page...');
}

let REDMINE_API_KEY = localStorage.getItem('RKEY');

window.handleAPIsave = (button) => {
  const inputApiKey = button.parentNode.children[2].value;
  if (inputApiKey == '' || inputApiKey == null || inputApiKey.length != 40) {
    alert('Please enter a valid API key.');
  } else {
    REDMINE_API_KEY = inputApiKey;
    localStorage.setItem('RKEY', REDMINE_API_KEY);
    alert('Saved API key successfully!');
    document.querySelector('#BL_prompt_api_key').style.display = 'none';
    document.querySelector('#BL_table_dom').style.display = 'block';
  }
};

if (REDMINE_API_KEY == null || REDMINE_API_KEY.length != 40) {
  document.querySelector('#BL_prompt_api_key').style.display = 'grid';
  document.querySelector('#BL_table_dom').style.display = 'none';
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

function createMyIssuesNodes(data = []) {
  data.map((item) => {
    const optionElement = document.createElement('option');

    optionElement.value = item.id;
    optionElement.text = item.subject;

    const issueDropdownEl = document.querySelector('.BL_issue-dropdown');
    issueDropdownEl.appendChild(optionElement);
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
  // createOptionsNodes(ACTIVITIES);
}

ROW_ELEMENT = document.querySelector('#BL_row').cloneNode(true);

async function fetchIssuesSearchAPI(query) {
  console.log('Searching issue: ', query);

  // return [query + 1, query + 2, query + 3, query + 4];
  try {
    const response = await fetch(
      `${BASE_URL_ORIGIN}/issues/auto_complete?term=${query}`,
      {
        method: 'GET',
        headers: {
          'X-Redmine-API-Key': REDMINE_API_KEY,
        },
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    }
  } catch (err) {
    console.error(err);
  }
}

// todo: fetch my issues from redmine
async function fetchMyIssuesAPI() {
  try {
    const response = await fetch('/issues.json?assigned_to_id=me', {
      method: 'GET',
      headers: {
        'X-Redmine-API-Key': REDMINE_API_KEY,
      },
    });
    if (response.ok) {
      const result = await response.json();
      createMyIssuesNodes(result.issues);
      return result;
    }
  } catch (err) {
    console.error(err);
  }
}

fetchMyIssuesAPI();

// * override the fetch func with hardcoded response
if (!IS_INJECTED) {
  fetchIssuesSearchAPI = async () => {
    return FETCH_AUTOCOMPLETE;
  };
}

window.removeRow = function (button) {
  const row = button.parentNode.parentNode;

  row.remove();
};

window.copyRow = function (button) {
  const row = button.parentNode.parentNode;
  const clonedNode = row.cloneNode(true);

  clonedNode.cells[1].lastElementChild.value =
    row.cells[1].lastElementChild.value;
  tableBodyEl.appendChild(clonedNode);
};

updateDates = () => {
  console.log('UPDATING DATES');
  const updateDateVal = document.querySelector('#BL_update-dates-input').value;
  Array.from(tableBodyEl.children).map((rowEl) => {
    rowEl.children[2].firstElementChild.value = updateDateVal;
  });
  Toastify({
    ...toastifyOptions,
    text: 'Updated all Dates to ' + updateDateVal,
  }).showToast();
};

addNewBtnEl.addEventListener('click', () => {
  tableBodyEl.appendChild(ROW_ELEMENT.cloneNode(true));
});

let debounceTimer;
let DEBOUNCE_DELAY = 300; // * ms
window.handleIssueInput = function (ev) {
  console.log(ev);
  const inputVal = ev.srcElement.value;
  clearTimeout(debounceTimer);
  if (inputVal) {
    debounceTimer = setTimeout(() => {
      let dropdownEl = ev.target.nextElementSibling;

      dropdownEl.innerHTML = '';
      fetchIssuesSearchAPI(inputVal).then((data) =>
        data.map((item) => {
          const optionElement = document.createElement('option');

          optionElement.value = item.id;
          optionElement.text = item.label;
          dropdownEl.appendChild(optionElement);
        })
      );
    }, DEBOUNCE_DELAY);
  }
};

window.handleIssueOptionClick = (el, event) => {
  let { value, label } = event.target;
  el.parentElement.firstElementChild.value = value;
  el.parentElement.firstElementChild.label = label;
  el.parentElement.children[2].innerHTML = label ?? '';
  el.style.display = 'none';
};

function calcTotalHours() {
  let totalHours = 0;
  Array.from(tableBodyEl.children).forEach((rowEl) => {
    totalHours += parseFloat(rowEl.children[3].firstElementChild.value);
  });
  let totalHoursEl = document.querySelector('#total-hours');
  totalHoursEl.innerHTML = `Total Hours: ${totalHours}`;
  if (totalHours >= 8) {
    totalHoursEl.style.backgroundColor = '#79d8b8';
  } else {
    totalHoursEl.style.backgroundColor = '#e3a3ae';
  }
}

function getTasksArrFromDOM() {
  const tasksArr = Array.from(tableBodyEl.children).map((rowEl) => {
    const issue_label =
      rowEl.children[0].firstElementChild.firstElementChild.label;
    const issue_id =
      rowEl.children[0].firstElementChild.firstElementChild.value;
    const activity_id = rowEl.children[1].firstElementChild.value;
    const spent_on = rowEl.children[2].firstElementChild.value;
    const hours = rowEl.children[3].firstElementChild.value;
    const comments = rowEl.children[4].firstElementChild.value;

    return {
      issue_label,
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
  const tasksStr = JSON.stringify(getTasksArrFromDOM(), null, 2);
  const confirmed = confirm('Are you sure to save?\n' + tasksStr);
  if (confirmed) {
    localStorage.setItem('savedTasks', tasksStr);
    Toastify({
      ...toastifyOptions,
      text: `Saved all Tasks`,
    }).showToast();
  }
}

function getShortLabel(label) {
  return label ? label.substring(label.indexOf(':') + 2) : '';
}

function loadTasks() {
  const loadedTasks = JSON.parse(localStorage.getItem('savedTasks'));
  loadedTasks?.map((task) => {
    const rowEl = ROW_ELEMENT.cloneNode(true);
    rowEl.children[0].firstElementChild.firstElementChild.value = task.issue_id;
    rowEl.children[0].firstElementChild.firstElementChild.label =
      task?.issue_label;
    rowEl.children[0].firstElementChild.children[2].innerHTML = getShortLabel(
      task?.issue_label
    );
    rowEl.children[1].firstElementChild.value = task.activity_id;
    rowEl.children[2].firstElementChild.value = task.spent_on;
    rowEl.children[3].firstElementChild.value = task.hours;
    rowEl.children[4].firstElementChild.value = task.comments;
    tableBodyEl.appendChild(rowEl);
  });
  Toastify({
    ...toastifyOptions,
    text: `Loaded ${loadedTasks.length} Tasks`,
  }).showToast();
}

function submitEntry(entry) {
  const time_entry = { time_entry: { ...entry } };
  return fetch(`${BASE_URL_ORIGIN}/time_entries.xml`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Redmine-API-Key': REDMINE_API_KEY,
    },
    body: JSON.stringify(time_entry),
  });
}

// todo: improve the funciton to make parallel async api calls
async function submitTasks() {
  const messageBoxEl = document.querySelector('#BL_message_box1');

  const tasksArr = getTasksArrFromDOM();
  messageBoxEl.innerHTML = `<p style='color: blue'>Submitting ${tasksArr.length} entries please wait...</p>`;

  const successfulSubmissions = [];
  const failedSubmissions = [];

  for (const entry of tasksArr) {
    try {
      const response = await submitEntry(entry);
      if (response.ok) {
        successfulSubmissions.push(entry);
      } else {
        throw new Error(`Failed to submit entry: ${response.statusText}`);
      }
    } catch (error) {
      failedSubmissions.push(entry);
    }
  }

  messageBoxEl.innerHTML = `<p style='color: green'>Successfully submitted entries: ${successfulSubmissions.map(
    (i) => i.issue_id
  )}</p>
  <p style='color: red'>Failed to submit entries:${failedSubmissions.map(
    (i) => i.issue_id
  )}</p>`;

  Toastify({ ...toastifyOptions, text: 'Submitted all entries' }).showToast();

  return { successfulSubmissions, failedSubmissions };
}

function clearAllTasks() {
  document.querySelectorAll('#BL_row').forEach((el) => el.remove());
  Toastify({
    ...toastifyOptions,
    text: `Cleared All Tasks`,
  }).showToast();
}

window.closeModal = function () {
  document.querySelector('.BL_modal').style.display = 'none';
  document.querySelector('.BL_open-modal-btn').style.display = 'block';
};

window.openModal = function () {
  document.querySelector('.BL_modal').style.display = 'block';
  document.querySelector('.BL_open-modal-btn').style.display = 'none';
};

document.querySelector('#BL_loadTasks').addEventListener('click', loadTasks);
document.querySelector('#BL_saveTasks').addEventListener('click', saveTasks);
document
  .querySelector('#BL_submitTasks')
  .addEventListener('click', submitTasks);
document
  .querySelector('#BL_clearAllTasks')
  .addEventListener('click', clearAllTasks);

document.querySelector('.BL_modal').addEventListener('click', (event) => {
  if (['BL_modal', 'BL_table_dom'].includes(event.target.parentElement.id)) {
    // * close all the issue search dropdown when clicked outside of the options
    document
      .querySelectorAll('.BL_issue-dropdown')
      .forEach((div) => (div.style.display = 'none'));
  }
});


window.handleIssueInputOnBlur = (el) => {
  setTimeout(() => {
    el.nextElementSibling.style.display = 'none';
  }, 500);
};

// * Load Datepicker with today’s  date
document.querySelector('#BL_update-dates-input').valueAsDate = new Date();

// * calculate total hours every 500ms
// todo: find a better way to do this.
setInterval(calcTotalHours, 500);
