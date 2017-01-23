// Deeper into functions

// Function Definition
function calculateArea (height, width){
  // height and width are PARAMETERS
  console.log(arguments); // this is the arguments object inside of calculateArea
  
// We can loop over arguments
//   for(var i = 0; i < arguments.length; i++){
//     console.log(arguments[i]);
//   }
  
  return height * width
  // return arguments[0] * arguments[1]
}

// Function invocation (function call)
// var area = calculateArea(23, 5);
// 5 and 23 are ARGUMENTS

// console.log(area);

// ================ \\
//    arguments     \\
// ================ \\

// Every function has an implicity defined variable inside of it called "arguments"

// while "arguments" LOOKS like an array (numbered indexes and a length property), it's technically just an object (no array methods are attached to it)

// Array-Like Object

function pokemonFight () {
  //   We don't know how many pokemon are going to be fighting
  // We will loop over the arguments object and have a function that can handle any number of pokemon
  
  for(var i = 0; i < arguments.length; i+=2){
    console.log("The " + arguments[i] + " fights the " + arguments[i+1] + "!")
  }
  
}

// pokemonFight("Charmangler", "Pikachewed", "2scoops", "garbagepokemon");

// A common thing for functions to do (especially in libraries) is to check either the type or length of arguments

// angular.module("myApp", []); // CREATES a module
// angular.module("myApp");  // RETRIEVING a module


// ============= \\
//    Scoping    \\
// ============= \\

// 2 main kinds of function scope

// 1. Lexical Scoping - Variables created inside of a function are only acessible inside of that function (they don't leak outside of that scope).  Lexical Scoping works a lot like one-way glass: Scopes can see outside of themselves and access "Parent" scopes, but cannot see "Child" scopes

// 2. Dynamic Scoping - Every time a function is called, it creates a scope that is unique and independent of any previous scopes created by that function.  When the function is done executing its code block, this scope is destroyed

// var potato = 'peruvian blue';
// // potato is accessible

// function myFunc () {
//   var veggie = 'celery';
//   // veggie and potato are accessible
//   console.log('INSIDE', veggie)
  
//   function otherFunc(){
//     var cheese = "blue"
//     // veggie, potato, and cheese are accessible
//   }
// }

// myFunc()

// console.log('OUTSIDE', potato)


// =================== \\
//  Garbage Collection \\
// =================== \\

// The process of deleting variables or values from memory so that your application doesn't crash the machine it's running on

// Garbage collection in Javascript is automatic
// When a value has no more references to it, javascript will garbage collect that value

// var pikachu = {
//   name : 'pikachu',
//   powers : 'lightning bolt'
// }

// pikachu = null; // Since pikachu no longers refers to the above object (and nothing else does), it will be garbage collected


var pikachu = {
  name : 'pikachu',
  powers : 'lightning bolt',
  trainer : {
    name : "Ash Ketchup"
  }
}

var ash = pikachu.trainer;
var power = pikachu.powers;
pikachu = null;
// In this example, we retain a reference to the trainer object, but the pikachu object that wraps it gets garbage collected

// ============ \\
//   Closure    \\
// ============ \\

// Closure is heavily tied to Dynamic Scoping / Garbage Collection

// Taking advantage of Dynamic Scoping to create an exception to garbage collection.  Keep a variable reference that would normally have been destroyed

function playerMaker (hp) {
  var health = hp;
  
  return function(damage){
    health -= damage;
    if( health <= 0){
      console.log('bleehhhhhh')
    }
    else{
      console.log("Still got " + health + " left!");
    }
  }
}

var bob = playerMaker(100);
var alice = playerMaker(125);

// bob and alice both get their OWN unique health variable in addition to their OWN unique damage-taking function

// the function stored in bob or alice has CLOSURE over their own HEALTH variable



