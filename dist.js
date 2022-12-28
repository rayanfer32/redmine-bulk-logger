window.BL_TABLE_DOM = `
    <div id="BL_modal" class="BL_modal">
      <div id="BL_table_dom">
        <button class="BL_close-modal-btn" onclick="closeModal()">x</button>
        <h2>Bulk Logger - v0.1</h2>
        <p>Script to help you log efforts in bulk.</p>
        <table class="BL_task-table">
          <thead>
            <tr class="table-headings">
              <th>Issue*</th>
              <th>Activity*</th>
              <th>Date*</th>
              <th>Hours*</th>
              <th>Comment</th>
              <th class="task-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr id="BL_row">
              <td>
                <div id="issue-select">
                  <input
                    class="BL_input"
                    type="search"
                    id="searchInput"
                    onfocus="this.nextElementSibling.style.display = 'block'"
                    oninput="window.handleIssueInput(event)"
                    placeholder="Search..."
                  />
                  <div
                    class="BL_issue-dropdown"
                    onclick="this.parentElement.firstElementChild.value = event.target.value; this.style.display ='none'"
                  >
                    <option value="1">*Please Select*</option>
                  </div>
                </div>
              </td>
              <td>
                <select class="BL_select" id="activity-select">
                  <option value="">*Please Select*</option>
                  <option value="8">UI/UX Design</option>
                  <option value="9">Backend Development</option>
                  <option value="10">QA Testing</option>
                  <option value="11">Requirement Gathering</option>
                  <option value="12">Deployment</option>
                  <option value="13">UI Development</option>
                  <option value="14">UI Development Rework</option>
                  <option value="15">Backend Development Rework</option>
                  <option value="16">Support Development</option>
                  <option value="17">Support Query Writing</option>
                  <option value="18">Support for Production</option>
                  <option value="19">KT Session</option>
                  <option value="20">Documentation</option>
                  <option value="21">Architecting Solution</option>
                  <option value="22">Architecture Review</option>
                  <option value="23">Project Planning</option>
                  <option value="24">Status Reporting</option>
                  <option value="25">Tech Design</option>
                  <option value="26">DevOps Activities</option>
                  <option value="27">Bug Fixing</option>
                  <option value="28">Code Review</option>
                  <option value="29">Unit Testing</option>
                  <option value="30">QA Automation</option>
                  <option value="31">Test Case Creation</option>
                  <option value="32">Project Meeting</option>
                  <option value="33">Client Call</option>
                  <option value="34">Internal Demo</option>
                  <option value="35">Org-wide Meeting / Activity</option>
                  <option value="36">Tech Sessions / Trainings</option>
                  <option value="37">DevOps Automation</option>
                  <option value="38">Idle Time</option>
                </select>
              </td>
              <td><input class="BL_input" type="date" name="date" /></td>
              <td>
                <input
                  class="BL_input hours"
                  type="number"
                  onchange="calcTotalHours()"
                  value="1"
                  min="0.5"
                  step="0.5"
                  name="hours"
                />
              </td>
              <td>
                <input
                  class="BL_input"
                  class="BL__comment-box"
                  type="text"
                  name="comments"
                  placeholder="Comments"
                />
              </td>
              <td class="BL_action_col">
                <button
                  class="BL_button"
                  id="BL_copyRow"
                  onclick="window.copyRow(this)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-subtract"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
                    />
                  </svg>
                </button>
                <button
                  class="BL_button"
                  id="BL_removeRow"
                  onclick="window.removeRow(this)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="BL_add-new-task">
          <button class="BL_button" id="BL_new-task">+</button>
          <p id="total-hours">Total Hours: 0</p>
        </div>

        <div class="BL_btn-block">
          <button class="BL_button" id="BL_loadTasks">Load</button>
          <button class="BL_button" id="BL_saveTasks">Save</button>
          <button class="BL_button" id="BL_submitTasks">Submit All</button>
          <button class="BL_button" id="BL_clearAllTasks">Clear All</button>
        </div>
      </div>

      <div id="BL_prompt_api_key" style="display: none;gap: 1rem">
        <pre>
          You only need to do this once.
          1. Goto https://redmine.niveussolutions.com/my/account
          2. On the Right side panel, Under API access key  
          3. Click on show and copy the key to clipboard
          4. Come back and paste the key here.
        </pre>
        <label>REDMINE API KEY: </label>
        <input type="text" placeholder="Paste your redmine API key here" />
        <button onclick="handleAPIsave(this)">Save</button>
      </div>
    </div>
    `;
const INJECTED_CSS = document.createElement('style');INJECTED_CSS.textContent = `
/* @import url('https://fonts.googleapis.com/css?family=Balthazar&display=swap'); */
/* html,
body {
  min-height: 100%;
} */


.BL_issue-dropdown {
  display: none;
  position: fixed;
  background: silver;
  padding: 1rem;
  gap: 1rem;
  z-index: 2;
}

.BL_close-modal-btn{
  position: absolute;
  right: 1rem;
  border: none;
  border-radius: 0.2rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
}

.BL_select {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Geneva, Verdana, sans-serif;
  /* font-size: 1rem; */
  color: #1f1e1e;
  line-height: 22px;
  border-radius: 3px;
}

.BL_modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;

  /* modal specific */
  position: absolute;
  z-index: 1;
  overflow: auto;
  top: 20%;
  left: 20%;
  right: 20%;
  /* width: 100%;
  height: 100%; */
  animation: change-background 4s ease infinite alternate-reverse;
}

@keyframes change-background {
  0% {
    box-shadow: 2px 4px 5rem 15px #69b7eb;
  }
  50% {
    box-shadow: 2px 4px 5rem 15px #b3dbd3;
  }
  75% {
    box-shadow: 2px 4px 5rem 15px #f4d6db;
  }
  100% {
    box-shadow: 2px 4px 5rem 15px #69b7eb;
  }
}


.BL_input {
  width: calc(100% - 10px);
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  vertical-align: middle;
}
.BL_input.hours {
  width: 3rem;
}

.BL_input:hover,
.BL_textarea:hover,
.BL_select:hover {
  outline: none;
  border: 1px solid #095484;
}

.BL_option {
  background: #fff;
}

.BL_action_col {
  display: flex;
  text-align: left;
}

.BL_row > th,
.BL_row > td {
  width: 18%;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  text-align: center;
  vertical-align: unset;
  line-height: 18px;
  font-weight: 400;
  word-break: break-all;
}

.BL_btn-block {
  margin-top: 20px;
  text-align: center;
}

.BL_button {
  height: auto;
  padding: 10px;
  border: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 0.5rem;
  background-color: #eef0ee;
  box-shadow: 1px 1px 0.2rem silver;
  font-size: 16px;
  color: #222;
  cursor: pointer;
}

.BL_button:hover {
  background-color: #79d8b8;
}

.BL_add-new-task {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.BL__comment-box {
  width: 20rem;
}
`;
document.head.append(INJECTED_CSS);

const HAS_BL_INSTANCE_MOUNTED = document.querySelector(".BL_modal")?.hasChildNodes() == true ? true : false

if(!HAS_BL_INSTANCE_MOUNTED){
  document.body.innerHTML += window.BL_TABLE_DOM;
  console.log('Redmine Bulk Logger is Loaded!');
}
else {
  console.log('Redmine Bulk Logger is Already Mounted!');
}

const IS_INJECTED = window.location.host.startsWith('redmine');
const BASE_URL_ORIGIN = window.location.origin;
const DOMAIN_ENC = 'bml2ZXVzc29sdXRpb25z';
const DOMAIN_NAME = atob(DOMAIN_ENC);
const tableBodyEl = document.querySelector('.BL_task-table > tbody');
const addNewBtnEl = document.querySelector('#BL_new-task');

if (
  !window.location.host.startsWith('localhost') &&
  !window.location.host.startsWith('redmine')
) {
  window.location.href = `https://redmine.${DOMAIN_NAME}.com/time_entries?utf8=%E2%9C%93&set_filter=1&sort=spent_on%3Adesc&f%5B%5D=user_id&op%5Buser_id%5D=%3D&v%5Buser_id%5D%5B%5D=me&f%5B%5D=&c%5B%5D=project&c%5B%5D=spent_on&c%5B%5D=user&c%5B%5D=activity&c%5B%5D=issue&c%5B%5D=comments&c%5B%5D=hours&group_by=spent_on&t%5B%5D=hours&t%5B%5D=`;
  alert('Redirecting to Redmine time entries page...');
}

let REDMINE_API_KEY = localStorage.getItem('RKEY');

window.handleAPIsave = (button) => {
  const inputApiKey = button.parentNode.children[2].value;
  if(inputApiKey == "" || inputApiKey == null || inputApiKey.length != 40){
    alert("Please enter a valid API key.")
  }
  else{
    REDMINE_API_KEY = inputApiKey
    localStorage.setItem('RKEY', REDMINE_API_KEY);
    alert("Saved API key successfully!")
    document.querySelector("#BL_prompt_api_key").style.display = "none"
    document.querySelector("#BL_table_dom").style.display = "block"
  }
};

if (REDMINE_API_KEY == null || REDMINE_API_KEY.length != 40) {
  document.querySelector("#BL_prompt_api_key").style.display = "grid"
  document.querySelector("#BL_table_dom").style.display = "none"
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

addNewBtnEl.addEventListener('click', () => {
  tableBodyEl.appendChild(ROW_ELEMENT.cloneNode(true));
});

let debounceTimer;
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
    }, 2000);
  }
};

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

window.closeModal = function () {
  document.querySelector('.BL_modal').style.display = 'none';
};

document.querySelector('#BL_loadTasks').addEventListener('click', loadTasks);
document.querySelector('#BL_saveTasks').addEventListener('click', saveTasks);
document
  .querySelector('#BL_submitTasks')
  .addEventListener('click', submitTasks);
document
  .querySelector('#BL_clearAllTasks')
  .addEventListener('click', clearAllTasks);

setInterval(calcTotalHours, 500);



