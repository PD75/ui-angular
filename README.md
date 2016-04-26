<p align="center">
  <img src="img/ui-angular.png" alt="UI Angular" style="max-width: 80%"/><br/>
</p>

# UI Angular

My _KISS_ -  semantic-ui/angularJS library

## About

You will find the all the help and usage instructions with navigation menu on the [UI Angular homepage](http://pd75.github.io/#/ui-angular). Here the readme's are distributed over the relevant folders.

---

[![License MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=plastic&maxAge=3600)](https://raw.githubusercontent.com/PD75/ui-angular/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ui-angular.svg?style=plastic&maxAge=3600)](https://www.npmjs.com/package/ui-angular)
[![GitHub release](https://img.shields.io/github/release/pd75/ui-angular.svg?style=plastic&label=GitHub&maxAge=3600 )](https://github.com/PD75/ui-angular/releases)

---

### Approach

Designed around KISS Principle _Keep it simple stupid_

1. Accept __all__ parameters that _Semantic UI_ does and extends with some angular features.
2. Pass data in variables and objects (don't clutter html, use controller and services)
3. Call _Semantic UI_ js code as much as possible: __Why reinvent the wheel!__
4. _Semantic UI_ syntax looks good with angular, no need to have directive to add html classes unless really nessesary or simpifies significantly
5. Follow from last two points :If there is no _Semantic UI_ js code, there needs to be a real benefit to write angular code.

### Dependencies

- AngularJS
- semantic UI
- jQuery


### Status

I have written directive as I have needed the modules, which mean they are used live and work. If you request a directive please allow a week for me to write it.

Please put an issue if you intend to contribute your work, then I will put some effort to write the rules and guidlines etc.


| Backlog       | Planned     | Done       | Not Planned              |
| ------------- |-------------| -----------|--------------------------|
| Dimmer        | Accordian   | Dropdown   | ~~Checkbox~~ *           |
| Embed         |             | Modal      | ~~Nag~~ *                |
| Progress      |             | Popup      | ~~Tab~~ *                |
| Rating        |             | Sidebar    |                          |
| Search**      |             | Sticky     |                          |
| Shape         |             |            |                          |
| Transition**  |             |            |                          |
|               |             | Visibility | ~~API~~ *                |    
|               |             |            | ~~Form Validation~~ *    |           
|               |             |            | ~~__Elements__~~ \***    |           
|               |             |            | ~~__Collections__~~ \*** |           


\* Found AngularJS out of the box does the job well enough
\** Not sure if AngularJs is better suited or not 
\**** No javascript, so no plans unless there is a compelling reason

## Install

### Download

#### NPM

```bat
> npm install ui-angular --save
```

#### Bower

```bat
> bower install ui-angular --save
```

### Build

#### Local Build

To build inside `ui-angular` folder
- Go to ui-angular folder
- Install all needed packages `ui-angular> npm install`
- Build `ui-angular> gulp build`

#### Integrated Build

To integrate with your own gulp build
- Copy `ui-angular.json` to your build folder and set the relative paths in the file
- There must be a semantic.json file in the same folder
- add 
``` javascript
var buildUIAngular = require('[your path]/ui-angular/tasks/build')(__dirname); 
gulp.task('buildUIAngular', buildUIAngular);
```
- And integrate this with your build task

Only the the modules used for Semantic-UI will be included in the build

## Usage

## Load the Module

Use `uiAngular` to load the module. E.g.

```javascript
angular.module('app', ['uiAngular']);
```

### Common features

- All object are initiated if needed to. E.g.
 ``` javascript
$('.classes').method();
 ```


- `vm.directiveObject` Dom instance object to be used for [Semantic UI] usage. E.g.
 ``` javascript
 vm.directiveObject.method('show');
 ```

- `vm.directiveData` [Semantic UI] settings object. E.g.
 ```javascript
 vm.directiveData = {
   on: 'hover',
   onShow: function(){...}
 };
 ```
 
 
 **Warning:** Setting the variables for the method through javascript/jquery syntax will in many cases render the `ui-directive` useless, i.e.
 
 ```javascript
 $('.classes').method({
  setting: value
 });
 
 /*OR*/
 
 vm.directiveObject.method({
  setting: value,
  callBack: function(){...}
 }); 
 ```
 [Semantic UI]:http://semantic-ui.com
