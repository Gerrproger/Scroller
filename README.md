Scroller
========
The buty of scrolling for anchors & one-page menus

##<a href="http://gerrproger.github.io/Scroller/" target="_blank">Live Demo</a>

### Browser compatibility
All popular browsers (does not use history api)

### Dependences
[jQuery](http://jquery.com/)

## Usage
### Calling
#### You can use it globbaly
```javascript
$(function(){
  scroller();
});
```
In that case it will automaticaly find all anchor links and process them! (Chaining is still supporting)
#### Or use jQuery style
```javascript
$(function(){
  $('h3').scroller();
});
```
### Defining targets
#### Plugin would be searching for `data-target` attributes or `href="#"` attributes in links.
If there is no `data-target` or `href="#"` attributes this element would become the target itself.<br/>
_You must specify an `id` of the target, no `#` is needed for `data-target`._

### Shift
#### You can also specify the shift (in px) of the scrolling position for each element. Just add the `data-shift` attribute.
```html
   <a href="#myId" data-sift="30">Some link</a>
   <a href="#mySecondId" data-sift="-100">Just another link</a>
```
_This value would be caсhed, so you can set it only for the first time (if several links has the same target)._
<br/>
---------------
#### _After the initialization `id`'s would be changed! At the end of the value would be added the [special char](#settings.additionalChar)_


## Settings
#### You can pass the settings object to customize the behavior.
```javascript
$(function(){
   var settings = {
      shift: 20,
      addClass: false
   };
   scroller(settings);
});
```
_All your settings would be cached so you must specify them during the first call of the function._

### settings.shift
The shift of the scrolling position for all links (in px). Can be overwritten by the `data-shift` attribute.
```javascript
scroller({shift: 10});
```
*Default:* 0

### settings.time
Sets the duration of the scrolling effect (in ms).
```javascript
scroller({time: 500});
```
*Default:* 300

### settings.addClass
Would add the `active` class to the links during the scroll (and user scroll too)
```javascript
scroller({addClasst: false});
```
*Default:* true

### settings.setHashOnClick
Will change the hash of the page url on the link click.
```javascript
scroller({setHashOnClickt: false});
```
*Default:* true

### settings.setHashOnScroll
Will change the hash of the page url while the user would be scrolling the page.<br/>
_Can be laggy on macs_
```javascript
scroller({setHashOnScroll: true});
```
*Default:* false

### settings.scrollOnLoad
It will scroll on page load to the target with the `id` specified in the url hash (if hash specified)
```javascript
scroller({scrollOnLoad: false});
```
*Default:* true

### settings.additionalChar
You can change char which is add to the target id's.
_Experemental and not recommended_
```javascript
scroller({additionalChar: '_'});
```
*Default:* •
