# formerize

Easily get or set controls value without writing a heap of code lines

##Steps
###Setting values
1. Set control name equals to object property
2. Initialize plugin with object
3. Done!

###Getting values
1. Set control name equals to object property
2. Call plugin get function to get object with values
3. Done!

##Examples:
###JS
```
var obj = {
 basicField: 'test',
 boolField: true,
 selectField: '1'
}
$(function () {
 $('[data-form="form"]').formerize(obj);
 $('#btnGet').click(function () {
     console.log($('[data-form="form"]').formerize('get'));
 });
});
```
###HTML
```
<input type="text" data-form="form" name="basicField" />
<input type="checkbox" data-form="form" name="boolField"/>
<select data-form="form" name="selectField">
 <option value="2">test2</option>
 <option value="1">test1</option>
 <option value="0">test0</option>
</select>
<a href="javascript:;" id="btnGet">get</a>
```
