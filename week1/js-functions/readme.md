# Functions

> Functions are reusable blocks of code (sets of instructions).  They can take inputs and produce outputs

f(x) = x + 3
f(9) = 9 + 3
f(9) = 12

## Defining a function

- `function` keyword
-  name (optional)
-  parameters
-  block of code in curly brackets

### 2 main ways of defining functions

1. Named Function

```javascript

function gogo(person, action){
  //console.log(person + " does the " + action);
  
  // return is how we get values OUT of a function
  return person + " does the " + action
}

```

2. Unnamed function (function declaration)

```javascript

var conjunction = function (word1, word2) {
  return word1 + word2
}

```

Technically, the `conjunction` function is considered to be an `anonymous` function (un-named)


Normally in javascript, we cannot use a variable until it has been defined - lower in the file
Named functions can be used on any line, no matter where they were defined.  This is because at runtime, when JS is being compiled, named functions are declared _before_ the rest of the code is executed. __HOISTING__


> !Important! Defining a function does __NOT__ execute the code block.  A function must be invoked (called) before that code can run

## Arguments vs Parameters

```javascript
// clownArray is our parameter - it's the placeholder or nickname for the REAL value that will be passed in

function clownCar(clownArray){
  for(var i = 0; i < clownArray.length; i++){
    console.log(clownArray[i] + ' got out of the car');
  }
}

var clowns = ["bozo", "blinky", "pennywise", "tooty"]
clownCar(clowns)
// clowns is our ARGUMENT, it's the real, actual value that gets passed into the clownCar function. Anywhere there was a "clownArray" gets replaced with the value of "clowns"

```

## Function Call vs Function Reference

`clownCar`   - reference - just references the function defintion, does _not_ run the code block
`clownCar()` - call - runs the function and executes the code block

> Functions are `first class citizens (objects)` in javascript.  That means they can passed around like any other kind of value (string, number, array, boolean, etc)

## Methods

> Methods are properties that are functions

```javascript

var bear = {
  name : "Baloo",
  favoriteFood : "porridge",
  eatBerries : function(){
    return "Dem berries is good!"
  },
  
  fightLeo : function(){
    return "Finally!  An Oscar"
  }

}

```

## Function Scope

> Variables created inside of a function _only_ exist inside of that function

```javascript

// Create an object of some Woodland Critters
function woodlandCritters(){
  
  // Make a bear
  var bear = "Baloo";
  console.log(bear)
  
  // Return woodland critters so we can access them after calling this function
  return {
    bear : bear, // our bear
    squirrel : "nutkins", // our squirrel
  }
}
var critters = woodlandCritters();

console.log(critters.bear);
```

Functions create `scope` that means variables created inside of a `scope` exist only in that `scope`







