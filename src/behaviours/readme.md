## Behaviours

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
 
 
 **Warning:** Setting the variables for the method through javascript/jquery syntax will in many cases render the ui-directive useless, i.e.
 
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



### Visibility

```html
<ANY ui-visibility="vm.visibilityObject"
  ui-visibility-data="vm.visibilityData">

.... 

</ANY>
```
- `vm.visibilityData` [Settings in Semantic UI](http://semantic-ui.com/behaviors/visibility.html#/settings) 
-  `vm.visibilityObject` [Usage in Semantic UI](http://semantic-ui.com/behaviors/visibility.html#behaviors)