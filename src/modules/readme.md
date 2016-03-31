## Modules

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

### Dropdown

```html
<ANY ui-dropdown="vm.dropdownObject" 
  class="ui dropdown" 
  ui-dropdown-data="vm.dropdownData">
  Title
  
/*Dropdown content, static or ng-repeat*/  
  <ANY ...>
    <ANY ng-repeat="item in vm.items">
      {{vm.content}}
    </ANY>  
  </ANY>  

</ANY>
```
- `vm.dropdownData` [Settings in Semantic UI](http://semantic-ui.com/modules/dropdown.html#/settings) 
-  `vm.dropdownObject` [Usage in Semantic UI](http://semantic-ui.com/modules/dropdown.html#behavior)

**NOTE:** There are a lot of design options for dropdowns in [Semantic UI] and therefore not practical to allow passing of the items as an array. Use `ng-repeat` to build dynamic dropdowns.

### Modal

```html
<ui-modal 
  ui-modal-show="vm.modalShow"
  ui-modal-url="urlpath/modal.html || vm.modalUrl"
  ui-modal-data="vm.modalData"
  ui-modal-obj="vm.modalObject">
  
/*Optional modal content*/  
  <div class="header">Header</div>
  <div class="content">
    <p></p>
  </div>  

</ui-modal>
```

- `vm.modalShow = true|false` will show or hide modal. Can also be used the check the status since it is updated for other events that affect the modal, like `vm.modalObject.modal('hide')`

- `ui-modal-url` allows injection of another page to both allow nicer code structure and reuse. **NOTE:** you can only load html pages with or without angular content, but no directives.
  - `urlpath/modal.html` path to html page directly in the html document
  - `vm.modalUrl` varaible containing url

- `vm.modalData` [Settings in Semantic UI](http://semantic-ui.com/modules/modal.html#/settings) 

-  `vm.modalObject` [Usage in Semantic UI](http://semantic-ui.com/modules/modal.html#behavior)


#### Popup

```html
<ANY ui-popup="vm.popupData" 
  ui-popup-obj="vm.popupObject"
  semanticUIMetadata>
  
  ...
  
</ANY>
```
- `vm.popupData` [Settings in Semantic UI](http://semantic-ui.com/modules/popup.html#/settings) 

-  `vm.popupObject` [Usage in Semantic UI](http://semantic-ui.com/modules/popup.html#behavior)

- `semanticUIMetadata` Can also specify content with html attributes, see [Specifying Content In Metadata in Semantic UI](http://semantic-ui.com/modules/popup.html#specifying-content-in-metadata)

#### Sticky

```html
<ANY-OPTIONAL ui-sticky-context="vm.stickyContext"> 
  
  ...
  
  <ANY ui-sticky="vm.stickyData" 
    ui-sticky-obj="vm.stickyObject"
    ui-sticky-context-id="vm.stickyContext">
  </ANY>
  
  ...
  
</ANY-OPTIONAL>

```

- `vm.stickyData` [Settings in Semantic UI](http://semantic-ui.com/modules/sticky.html#/settings) 

-  `vm.stickyObject` [Usage in Semantic UI](http://semantic-ui.com/modules/sticky.html#refreshing-cached-values)

- `vm.stickyContext` 
  - Just pass and empty variable for each case, allows sticking to adjescent dom elements
  - `ui-sticky-context` is on the DOM element you want it to stick to
  - See [Sticking to Adjacent Context](http://semantic-ui.com/modules/sticky.html#sticking-to-adjacent-context)

[Semantic UI]:http://semantic-ui.com