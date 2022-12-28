### Redmine Bulk Logger 

### Usage
* Goto Redmine page > open console and paste the below code.
```js
fetch("https://gist.githubusercontent.com/rayanfer32/62bef346b3d396723cffaff6889aa03c/raw/redmine.dist.js")
.then(t => t.text())
.then(t => eval(t))
```

### Bookmarklet Shortcut
```js
javascript: (function(){
fetch("https://gist.githubusercontent.com/rayanfer32/62bef346b3d396723cffaff6889aa03c/raw/redmine.dist.js")
.then(t => t.text())
.then(t => eval(t))
}())
```

### Install Dependencies
`npm install`

### Development 
`npm run dev`
* Start Live server extension


### src files for local developemnt
* view.html
* script.js
* styles.css

