# Angular

- Originated in Google when they were building apps like Docs / Sheets

> Angular is a strongly opinionated, front-end, MVC framework

## Strongly Opinionated

- Doesn't take nothing from nobody
- Overrules other things

- Likes to be your all in one solution 
- it does not always play well with others
- Do things the "angular way"
  - It's important to remember that the 'angular way' may not always be the best or easiest solution

## Front-end

- Everything in the browser
  - The browser should be the only place angular code lives
  - Angular _does_ have ways of interacting with your server / back-end
  
## MVC
> Model View Controller

### Model
> The model is the raw data that drives your application, and keeps track of its state

### View
> The visual representation of the model - what the user sees

### Controller
> Glue that links the model and the view

- Models _know_ things, views _show_ things, and controllers _do_ things

- In Angular, you won't be directly manipulating the view
  - Contrasting with things like `document.getElementById` and affecting the element selected
  
- 2 styles of programming
  1. Imperative Programming
    - List of instructions
    - Direct DOM manipulation
  
  2. Declarative Programming (will be done in Angular)
    - All about creating a system of relationships
    - When events happen, we react
    - In Angular, we will define a relationship between the `model` and the `view`.  As the `model` updates, so will the `view` (data binding)

## Framework

> A framework is just a bunch of code that someone else wrote that you can use

What makes something a _framework_ is its orientation around solving common problems and giving you a structure for your application

same code
same code
same code
NEW CODE
same code
same code

framework
framework
framework
YOUR CODE
framework
framework

## Angular Components

> There are many components in Angular, today we'll talk about 3

### Module
> Highest Level component in angular

- Really are just a place to create _other_ angular components
  - Like a bucket for you to put stuff in
  
### Controller
> What ties your JS / HTML together

- Controllers have an object that we use inside of them.  That object is what our HTML will eventually have access to
- Registered to a module

### Directive
> Custom HTML attributes/elements that expand functionality

- Most often HTML attributes
- Marks where / what angular should do when it encounters the element
- Tons of built-in directives, you can also make your own


## Dependency Injection
> Process of giving Angular components access to things it wouldn't normally have access to











