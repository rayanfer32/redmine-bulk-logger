### Redmine Bulk Logger 

### Usage
* Goto Redmine page > open console and paste the below code.
```js
fetch("https://raw.githubusercontent.com/rayanfer32/redmine-bulk-logger/main/dist.js").then(t => t.text()).then(t => eval(t))
```

### Bookmarklet Shortcut
```js
javascript: (function(){fetch("https://raw.githubusercontent.com/rayanfer32/redmine-bulk-logger/main/dist.js").then(t => t.text()).then(t => eval(t))}())
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

