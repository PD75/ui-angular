# uiAngular

My _KISS_ -  semantic-ui/angularJS library

## Status

This is WIP, and only modules I have needed are included; but requests and contributions are welcome.

Please put an issue if you intend to contribute your work, then I will put some effort to write the rules and guidlines etc.

- Modules
  - [ ] Accordian
  - [ ] ~~Checkbox~~ *
  - [ ] Dimmer
  - [x] Dropdown
  - [ ] Embed
  - [x] Modal
  - [ ] ~~Nag~~ *
  - [x] Popup
  - [ ] Progress
  - [ ] Rating
  - [ ] Search**
  - [ ] Shape
  - [ ] Sidebar
  - [x] Sticky
  - [ ] ~~Tab~~ *
  - [ ] Transition**

- Behaviours
  - [ ] ~~API~~ *
  - [ ] ~~Form Validation~~ *
  - [x] visibility
   
\* Found AngularJS out of the box does the job well enough
\** Not sure if AngularJs is better suited or not 

## Dependencies

- angular: ...
- semantic-ui: both css and javascripts
- jquery: for semantic-ui


## Approach

Designed around KISS Principle _Keep it simple stupid_

- Call _Semantic UI_ js code as much as possible: __Why reinvent the wheel!__
- Accept __all__ parameters that _Semantic UI_ does, as an object (don't clutter html, use controller and services)
- _Semantic UI_ syntax looks good with angular, no need to have directive to add html classes unless really nessesary or simpifies significantly
- If there is no _Semantic UI_ js code, there needs to be a real benefit to write angular code (see point above)


