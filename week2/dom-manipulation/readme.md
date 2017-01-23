# DOM Manipulation

## What is the DOM?
> Document Object Model - tree that represents the rendered HTML content

The whole DOM is referred to as the `document` - Javascript actually has a variable built in called `document` when you are in the browser

The DOM is comprised of `nodes`
- `document` is a document node
- all HTML elements are element nodes
- all HTML attributes are attribute nodes
- text inside of an element is a text node

## Using Javascript to Select Nodes
> Our DOM is made of nodes, we'll use JS to find and select certain nodes so that we can manipulate them

There are several methods for selecting nodes, all of those methods live on the `document` object

- querySelector
- querySelectorAll
- getElementById
- getElementsByClassName
- getElementsByTagName

## Creating an element

- document.createElement(`tag`)
  - document.createElement('p') => `$p`
- document.createTextNode('blah blah blah') => `$text`
- NODE.appendChild(`NODE`)
  - $p.appendChild($text)
  - $someOtherElement.appendChild($p)
  - great for putting text nodes inside of an element node or element nodes inside of other element nodes

## Other awesome methods
`.getClientRects()`

## Event Listeners!
> Users interact with webpages, they do things like click, scroll, press keys, etc.  Often we want to know when users are doing these things, especially on specific HTML elements

Event listeners allow us to create `callback functions` (event handlers) that should be executed when some sort of event happens

- `click`
- `scroll`
- `submit`
- Key : `keyup`, `keydown`
- Hover : `mouseover`, `mouseout`, `mouseenter`, `mouseleave`

Our sites will become big systems of event listeners / handlers






