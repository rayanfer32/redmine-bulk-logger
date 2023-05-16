const TOASTIFY_CSS = document.createElement('style');TOASTIFY_CSS.textContent = `
/**
 * Minified by jsDelivr using clean-css v5.3.0.
 * Original file: /npm/toastify-js@1.12.0/src/toastify.css
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
 .toastify{padding:12px 20px;color:#fff;display:inline-block;box-shadow:0 3px 6px -1px rgba(0,0,0,.12),0 10px 36px -4px rgba(77,96,232,.3);background:-webkit-linear-gradient(315deg,#73a5ff,#5477f5);background:linear-gradient(135deg,#73a5ff,#5477f5);position:fixed;opacity:0;transition:all .4s cubic-bezier(.215, .61, .355, 1);border-radius:2px;cursor:pointer;text-decoration:none;max-width:calc(50% - 20px);z-index:2147483647}.toastify.on{opacity:1}.toast-close{background:0 0;border:0;color:#fff;cursor:pointer;font-family:inherit;font-size:1em;opacity:.4;padding:0 5px}.toastify-right{right:15px}.toastify-left{left:15px}.toastify-top{top:-150px}.toastify-bottom{bottom:-150px}.toastify-rounded{border-radius:25px}.toastify-avatar{width:1.5em;height:1.5em;margin:-7px 5px;border-radius:2px}.toastify-center{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content;max-width:-moz-fit-content}@media only screen and (max-width:360px){.toastify-left,.toastify-right{margin-left:auto;margin-right:auto;left:0;right:0;max-width:fit-content}}
 /*# sourceMappingURL=/sm/cb4335d1b03e933ed85cb59fffa60cf51f07567ed09831438c60f59afd166464.map */`;
document.head.append(TOASTIFY_CSS);
/**
 * Minified by jsDelivr using Terser v5.14.1.
 * Original file: /npm/toastify-js@1.12.0/src/toastify.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
!function(t,o){"object"==typeof module&&module.exports?module.exports=o():t.Toastify=o()}(this,(function(t){var o=function(t){return new o.lib.init(t)};function i(t,o){return o.offset[t]?isNaN(o.offset[t])?o.offset[t]:o.offset[t]+"px":"0px"}function s(t,o){return!(!t||"string"!=typeof o)&&!!(t.className&&t.className.trim().split(/\s+/gi).indexOf(o)>-1)}return o.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},o.lib=o.prototype={toastify:"1.12.0",constructor:o,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||o.defaults.text,this.options.node=t.node||o.defaults.node,this.options.duration=0===t.duration?0:t.duration||o.defaults.duration,this.options.selector=t.selector||o.defaults.selector,this.options.callback=t.callback||o.defaults.callback,this.options.destination=t.destination||o.defaults.destination,this.options.newWindow=t.newWindow||o.defaults.newWindow,this.options.close=t.close||o.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":o.defaults.gravity,this.options.positionLeft=t.positionLeft||o.defaults.positionLeft,this.options.position=t.position||o.defaults.position,this.options.backgroundColor=t.backgroundColor||o.defaults.backgroundColor,this.options.avatar=t.avatar||o.defaults.avatar,this.options.className=t.className||o.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?o.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||o.defaults.onClick,this.options.offset=t.offset||o.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:o.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||o.defaults.ariaLive,this.options.style=t.style||o.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var o in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[o]=this.options.style[o];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var s=document.createElement("img");s.src=this.options.avatar,s.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(s):t.insertAdjacentElement("afterbegin",s)}if(!0===this.options.close){var e=document.createElement("button");e.type="button",e.setAttribute("aria-label","Close"),e.className="toast-close",e.innerHTML="&#10006;",e.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var n=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&n>360?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(o){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var l=i("x",this.options),r=i("y",this.options),p="left"==this.options.position?l:"-"+l,d="toastify-top"==this.options.gravity?r:"-"+r;t.style.transform="translate("+p+","+d+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var i=o.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,i),o.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),o.reposition()}.bind(this),400)}},o.reposition=function(){for(var t,o={top:15,bottom:15},i={top:15,bottom:15},e={top:15,bottom:15},n=document.getElementsByClassName("toastify"),a=0;a<n.length;a++){t=!0===s(n[a],"toastify-top")?"toastify-top":"toastify-bottom";var l=n[a].offsetHeight;t=t.substr(9,t.length-1);(window.innerWidth>0?window.innerWidth:screen.width)<=360?(n[a].style[t]=e[t]+"px",e[t]+=l+15):!0===s(n[a],"toastify-left")?(n[a].style[t]=o[t]+"px",o[t]+=l+15):(n[a].style[t]=i[t]+"px",i[t]+=l+15)}return this},o.lib.init.prototype=o.lib,o}));
//# sourceMappingURL=/sm/e1ebbfe1bf0b0061f0726ebc83434e1c2f8308e6354c415fd05ecccdaad47617.map
window.BL_TABLE_DOM = `
    <button
      style="display: none"
      class="BL_button BL_open-modal-btn"
      onclick="openModal()"
    >
      __
    </button>
    <div id="BL_modal" class="BL_modal">

        <svg
          stroke="currentColor"
          class="BL_button BL_close-modal-btn"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          onclick="closeModal()""
        >
          <path
            d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"
          ></path>
        </svg>
     
      <div id="BL_table_dom">
        <h2>Bulk Logger - v0.4</h2>
        <p>Script to help you log efforts in bulk.</p>
        <p id="BL_message_box1" class="BL_message_box"></p>
        <table class="BL_task-table">
          <thead>
            <tr class="BL_table-headings">
              <th style="width: 20%">Issue*</th>
              <th style="width: 10%">Activity*</th>
              <th style="width: 10%">Date*</th>
              <th style="width: 2rem">Hours*</th>
              <th style="width: 30%">Comment</th>
              <th style="width: 10%" class="task-actions">Actions</th>
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
                    style="width: 100%"
                    onfocus="this.nextElementSibling.style.display = 'block'"
                    onblur="window.handleIssueInputOnBlur(this)"
                    oninput="window.handleIssueInput(event)"
                    autocomplete="off"
                    placeholder="Search..."
                  />
                  <div
                    class="BL_issue-dropdown"
                    onclick="window.handleIssueOptionClick(this,event)"
                  >
                    <option value="1">*Type something...*</option>
                  </div>
                  <div class="BL_issue-label"></div>
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
              <td>
                <input
                  style="width: 100%"
                  class="BL_input"
                  type="date"
                  name="date"
                />
              </td>
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
                  style="width: 100%"
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
          <button class="BL_button" id="BL_new-task">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
              ></path>
            </svg>
          </button>
          <div id="total-hours">Total Hours: 0</div>
          <input
            class="BL_input"
            style="width: 10rem"
            id="BL_update-dates-input"
            type="date"
            name="date"
          />
          <button class="BL_button" onclick="updateDates()">
            Update Dates
          </button>
        </div>

        <div class="BL_btn-block">
         
          <button class="BL_button" id="BL_loadTasks">Load</button>
          <button class="BL_button" id="BL_saveTasks">Save</button>
          <button class="BL_button" id="BL_submitTasks">Submit All</button>
          <button class="BL_button" id="BL_clearAllTasks">Clear All</button>
          <button class="BL_button" id="BL_importTasks">Import</button>
          <button class="BL_button" id="BL_exportTasks">Export</button>
        </div>
        <div class="BL_links">
          <a href="" target="_blank" id="BL_spent_time_link">Spent Time</a>
          <a href="" target="_blank" id="BL_my_issues_link">My Issues</a>
        </div>
      </div>

      <div
        id="BL_prompt_api_key"
        style="display: none; justify-content: center; gap: 1rem"
      >
        <pre>
          You only need to do this once.
          1. Goto https://redmine.niveussolutions.com/my/account
          2. On the Right side panel, Under API access key  
          3. Click on show and copy the key to clipboard
          4. Come back and paste the key here.
        </pre>
        <label>REDMINE API KEY: </label>
        <input type="text" placeholder="Paste your redmine API key here" />
        <button class="BL_button" onclick="handleAPIsave(this)">Save</button>
      </div>
    </div>
    `;
const INJECTED_CSS = document.createElement('style');INJECTED_CSS.textContent = `
@import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');

.BL_modal {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.25rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* modal specific */
  position: absolute;
  z-index: 99999;
  overflow: auto;
  top: calc(100vh - 80%);
  left: calc(100vw - 80%);
  right: calc(100vw - 80%);
  box-shadow: 0 0 5rem 2rem silver;
  /* animation: change-background 4s ease-in-out infinite alternate-reverse; */
}

#issue-select {
  align-items: center;
  color: black;
  border-radius: 0.25rem;
  background-color: #eee;
}

.BL_issue-label {
  font-size: 0.7rem;
  font-family: monospace;
  padding: 0.2rem;
  text-overflow: ellipsis;
}

.BL_issue-dropdown {
  display: none;
  position: absolute;
  color: black;
  background: #f4ffffb0;
  border-radius: 1rem;
  padding: 0.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 2px 4px 1rem #bebebe;
}

.BL_issue-dropdown > option {
  padding: 0.3rem;
  cursor: pointer;
}

.BL_close-modal-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  /* width: 2rem; */
  border: none;
  border-radius: 0.2rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
}

.BL_open-modal-btn {
  position: fixed;
  top: -1.2rem;
  left: 48%;
}

.BL_select {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: inherit;
  /* font-size: 1rem; */
  color: #1f1e1e;
  line-height: 22px;
  border-radius: 3px;
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
    box-shadow: 2px 4px 5rem 15px #e9eb91;
  }
}

.BL_input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  vertical-align: middle;
  font-family: inherit;
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
  gap: 0.5rem;
  display: table-cell;
  vertical-align: middle;
}

.BL_btn-block {
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.BL_button {
  height: auto;
  padding: 0.5rem;
  border: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 0.2rem silver ;
  font-size: 1rem;
  font-family: inherit;
  color: #222;
  cursor: pointer;
  /* background-color: #80e492; */
}

.BL_button:hover {
  background-color: white;
}
.BL_button:active {
  background-color: #79d8b8;
}

.BL_add-new-task {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.8rem;
}
.BL__comment-box {
  /* width: 20rem; */
}

.BL_links {
  display: flex;
  gap: 1rem;
}

#BL_table_dom {
  width: 100%;
}

.BL_message_box {
  color: purple;
  font-family: monospace;
}

.BL_task-table {
  width: 100%;
}

#total-hours {
  font-size: 1rem;
  background-color: #e3a3ae;
  padding: 0.5rem;
  border-radius: 0.4rem;
}

.BL_green {
  background-color: #79d8b8;
}

@media (max-width: 900px) {
  .BL_modal {
    top: 0%;
    left: 0%;
    right: 0%;
  }

  #BL_row,
  .BL_table-headings {
    display: grid;
    margin-bottom: 1rem;
    width: calc(100vw - 10%);
  }

  .BL_add-new-task {
    display: grid;
    width: calc(100vw - 10%);
  }

  .BL_btn-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: calc(100vw - 10%);
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 1400px) {
  .BL_modal {
    top: 10%;
    left: 10%;
    right: 10%;
  }
}
`;
document.head.append(INJECTED_CSS);
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
    optionElement.text = `${item.tracker.name} #${item.id}: ${item.subject}`;

    const issueDropdownEl = document.querySelector('.BL_issue-dropdown');
    issueDropdownEl.appendChild(optionElement);
  });

  // * update the  ROW_ELEMENT  with issue options
  ROW_ELEMENT = document.querySelector('#BL_row').cloneNode(true);
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

function loadTasksFromTasksArr(tasksArr) {
  tasksArr?.map((task) => {
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
    text: `Loaded ${tasksArr.length} Tasks`,
  }).showToast();
}

function loadTasks(){
  if (localStorage.getItem('savedTasks')) {
    loadTasksFromTasksArr(JSON.parse(localStorage.getItem('savedTasks')));
  }
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

function importTasks() {
  let pastedJsonStr = prompt('Paste your JSON here...');
  try {
    if (pastedJsonStr) {
      const tasksArr = JSON.parse(pastedJsonStr);
      loadTasksFromTasksArr(tasksArr);
      alert('Tasks Imported');
    }

  } catch (err) {
    alert(err);
  }
}

function download(text, filename){
  var blob = new Blob([text], {type: "text/plain"});
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}


function exportTasks(){
  let downloadText = JSON.stringify(getTasksArrFromDOM(), null, 2)
  download(downloadText, 'tasks.json')
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
document
  .querySelector('#BL_importTasks')
  .addEventListener('click', importTasks);
document
  .querySelector('#BL_exportTasks')
  .addEventListener('click', exportTasks);

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
