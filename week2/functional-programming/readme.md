# Functional Programming

## Warm Up

- Create a folder to hold some files for today's lecture
  - Create an `index.html` file
  - Create a `main.js` file
  - use a `script` tag to link the 2!

## What is it?
> Functional programming is a programming paradigm focused on the following concepts : immutability and composability

## Higher-Order functions
> Functions that take _other_ functions as arguments or return functions

- Why might this be more common in JS?
  - Functions are `first class citizens (objects)`
  - Functions are considered values just like numbers, strings, arrays, etc

## Pure functions
> Functions that do not affect variables outside of themselves

- Functions that reach outside of their scope to manipulate values are considered to have `side-effects`

- Functions without `side-effects` are considered `pure`.  They deal solely with input/output

- Works well with the concept of `immutability` in functional programming

## Immutability
> Data doesn't change - always create NEW data

This is a big tenant of functional programming.  We won't be changing or destroying old data - just making more, newer data

Immutability ties in with the concept of `state` in our data.  By keeping your data `stateless`, you don't affect the original, pristine set of data, we create altered copies of it to do our dirty work

A huge limitation : 
Users expect web apps to change state, posting a status on FB, updating your email address, etc.
It's very difficult (read : almost impossible) to make a web-application 100% functional.  In JavaScript we will be using `callback functions` to handle events from the user and other systems.

`callback functions` are functions that are passed as arguments to another function.  the function that is accepting the callback function as an argument decides when it should be invoked.

## Composability
> Forming complex functionality from simpler pieces (legos)

Like Batman's utility belt - a lot of general purpose tools that can be used together for greater effect


