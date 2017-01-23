# Breakouts

Today we will cover some topics that YOU want to cover! But here are some suggestions if you can't think of anything.

- `jquery`
- `Deeper into dev tools` (+)
  - `DOM nodes`

- `deeper into node`

## Notes

### jQuery
> jQuery is a library that has been around for a long time and is primarily a DOM manipulation paradigm library (as opposed to the more modern data-binding paradigm).

[jQuery](https://api.jquery.com)'

- it reduces the amount of code you have to write in order to do traditional manipulation
- it also reduces the amount of enery to attach listeners
- many frameworks, including Bootstrap and Backbone, depend on it
- jQuery became super popular because to this day it heavily focuses on being **cross-browser**
    - adds a ton of Polyfills (add new functionality to old programs/applications)
    - great for making sure your code works in Internet Explorer
- loads some globals into the `window`
    - `window.jQuery`
    - `window.$`

#### Selectors in jQuery

In vanilla JS, you there are several methods you can use to select the things:    
- `document.getElementById()`
- `document.getElementByClassName()`
- `document.getElementByTagName()`
- `document.querySelector()`
- `document.querySelectorAll()`, the most similar to the way jQuery selects things

In jQuery, you do all of that via one way:
- `$('some-css-selector')`
- `$('.some-class')`
- `$('#some-id')`
- `$('p')`, all `<p>` tags on the page

Bootstrap depends on jQuery, but alloqws you to quickly implement a lot of cool things you don't have to make from scratch.Bootstrap
- http://getbootstrap.com/javascript/




