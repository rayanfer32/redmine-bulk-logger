### Redmine Bulk Logger 
![image](https://user-images.githubusercontent.com/37145078/217998828-f89e91d6-b579-4b41-bf8d-523475b74c3b.png)

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

