Scroller
========

Easy scroll-to-title menu plugin

Now available only version for [jQuery](http://jquery.com/)

## Usage
Add `data-target` attribute that includes `id` of the title to links
```html
<div id="someMenu">
   <a href="#" data-target="title1">Title1</a>
   <a href="#" data-target="title2">Title2</a>
</div>
```
Then just call the function with parametrs:<br/>
* **Id of the wrapper with links**<br/>
* **Interval from the top of the window and the title in pixels**, *default: 0*<br/>
* **Time for scrolling animation in milliseconds**, *default: 300*
```javascript
$(function(){
  scroller('someMenu', 50, 600);
});
```

You can also setup the shift from the top of the window for the each title using `data-shift`
```html
<div id="someMenu">
   <a href="#" data-target="title1" data-shift="100">Title1</a>
   <a href="#" data-target="title2" data-shift="-80">Title2</a>
</div>
```
