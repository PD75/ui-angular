<p align="center">
  <img src="img/ui-angular.png" alt="UI Angular"/><br/>
</p>

# UI Angular

My _KISS_ -  semantic-ui/angularJS library

## About

### Approach

Designed around KISS Principle _Keep it simple stupid_

1. Accept __all__ parameters that _Semantic UI_ does, angular features are extra.
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
| Embed         | Sidebar     | Modal      | ~~Nag~~ *                |
| Progress      |             | Popup      | ~~Tab~~ *                |
| Rating        |             | Sticky     |                          |
| Search**      |             |            |                          |
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
- Copy ui-angular to your build folder and set the relative paths in the file
- There must be a semantic.json file in the same folder
- add 
``` javascript
var buildUIAngular = require('[your path]/ui-angular/tasks/build')(__dirname); 
gulp.task('buildUIAngular', buildUIAngular);
```
- And integrate this with your build task

Only the the modules used for Semantic-UI will be included in the build