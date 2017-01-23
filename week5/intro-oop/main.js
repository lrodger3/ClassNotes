'use strict'
// // Cat Class

// function Cat (name, claws, gender, attitude, lives) {
//   //   console.log('THIS', this);
//   this.name = name;
//   this.claws = claws;
//   this.gender = gender;
//   this.attitude = attitude;
//   this.lives = lives;
  
//   // This way of attaching methods is inefficient memory-wise
//   // if we had 10000 cats, we would have 10000 copies of this function in memory
// //   this.shed = function(){
// //     return this.name + ' shed all over the couch!';
// //   }
  
// }
// // we assign our properties to the `this` object.  When using a function as a CONSTRUCTOR, `this` begins as an empty object({}) and is automatically returned from the function

// // Making an INSTANCE of the Cat CLASS
// var fluffy = new Cat("Fluffy", true, "male", "sassy/bad", 4);

// // A BETTER way of attaching methods to our instances is to attach the method to the Cat PROTOTYPE
// // The PROTOTYPE is the best place to put methods that ALL of your instances need

// Cat.prototype.shed = function() {
//   return this.name + " shed all over the couch!"
// }
// // This allows us to attach the shed function ONCE to a common object ALL Cats have access to

// // You can attach new methods to EXISTING prototypes
// // Array.prototype.arrayStuff = function() {
// //   console.log('doing things!')
// // }

// // CHALLENGE I

// /*

// Make a Class for breakfast cereal

// name         => String
// sweetness    => Number
// crunchFactor => Number
// mascotName   => String


// Make one INSTANCE of your class

// */

// function Cereal(name, sweetness, crunchFactor, mascotName) {
//   this.name = name;
//   this.sweetness = sweetness;
//   this.crunchFactor = crunchFactor;
//   this.mascotName = mascotName;
// }

// var bourbonFlakes = new Cereal(
//   "Bourbon Flakes",
//   1,
//   6,
//   "Mr. Barrell"
// );
// var ginPuffs = new Cereal(
//   "Gin Puffs",
//   1,
//   6,
//   "Billy the Beefeater"
// )

// // [new Cereal(
// //   "Bourbon Flakes",
// //   1,
// //   6,
// //   "Mr. Barrell"
// // ),
// // new Cereal(
// //   "Gin Puffs",
// //   1,
// //   6,
// //   "Mr. Barrell"
// // )]


// /*
//   CHALLENGE II
  
//   Take that Cereal class you had before and add a method to its prototype
  
//   Method : "disappear"
//   Do     : log the mascot just stole your cereal

// */

// Cereal.prototype.disappear = function() {
//   console.log(this.mascotName + " just stole your " + this.name + "!")
// //   this.name = ""; // having this affect the object it is on makes this method "destructive"
// }

// Newer syntax for es6/es2015
class Cat {
  constructor(name, claws, gender, attitude, lives){
    this.name = name;
    this.claws = claws;
    this.gender = gender;
    this.attitude = attitude;
    this.lives = lives;
  }
  // prototype method
  shed(){
    return this.name + " shed on the couch!";
  }
}

var fluffy = new Cat("fluffy", true, "male", "sassy", 4);
