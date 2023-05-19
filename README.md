### Redmine Bulk Logger 
![image](https://user-images.githubusercontent.com/37145078/217998828-f89e91d6-b579-4b41-bf8d-523475b74c3b.png)

### Usage
* Goto Redmine page > open console and paste the below code.
```js
fetch("https://raw.githubusercontent.com/rayanfer32/redmine-bulk-logger/main/dist.js").then(t => t.text()).then(t => eval(t))
```
or 

### Bookmarklet Shortcut
```js
javascript: (function(){fetch("https://raw.githubusercontent.com/rayanfer32/redmine-bulk-logger/main/dist.js").then(t => t.text()).then(t => eval(t))}())
```

or 

### Auto Inject using Tampermonkey extension
You can use tampermonkey extension to automate script injection

Configure the `@match` property according to your redmine website

```js
// ==UserScript==
// @name         Redmine bulk logger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script to help you log efforts in bulk!
// @author       You
// @match        *://redmine.*.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=redmine.org
// @grant        none
// ==/UserScript==

(function() {
    fetch("https://raw.githubusercontent.com/rayanfer32/redmine-bulk-logger/main/dist.js").then(t => t.text()).then(js => {
        eval(js);
        closeModal();
    });

})();

```

### Install Dependencies
`npm install`

### Development 
* Start Live server extension
* Run compiler `npm run dev`


### src files for local developemnt
* view.html
* script.js
* styles.css

