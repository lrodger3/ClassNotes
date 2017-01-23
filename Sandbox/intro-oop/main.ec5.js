// EC5 syntax

// Create a function prototype for the class Cat
function Cat(name, color, breed, clawedness, brattiness) {
  console.log('EC5 this!', this);
  // var this = {}    => with new keyword

  this.name = name;
  this.color = color;
  this.breed = breed;
  this.clawedness = clawedness;
  this.brattiness = brattiness;

  // return this      => with new keyword
  // return undefined => without new keyword

  // Attaching a method in this manner is not optimal.  
  // 10k cats would make 10k copies of an identical function.
  // this.meow = function(){
  //     console.log('meow');
  // };
}

// A BETTER way to attach methods is to use something called the PROTOTYPE.
// This will allow ALL instances of that class access to a method.
Cat.prototype.meow = function() {
  console.log('The ' + this.color + ' cat says meow!');
};

// Constructing an INSTANCE of the Cat CLASS.
// We use the 'new' keyword when using class constructors.
// There is no difference between EC5 and EC6 in creating an instance of a class.
var fluffy = new Cat(
  'Fluffy',
  'white',
  'lion',
  true,
  8.5
);

// create another instance of the same class.
var poptart = new Cat(
  'Poptart the supreme ruler of all toasters in africa in general but uganda in particular',
  'sprinkles',
  'cartoon',
  false,
  10
);

// CHALLENGE I
// Make a Class Constructor for breakfast cereals
//      name         => String
//      sweetness    => Number
//      crunchFactor => Number
//      mascotName   => String
var Cereal = function(name, sweetness, crunchFactor, mascotName) {
  this.name = name;
  this.sweetness = sweetness;
  this.crunchFactor = crunchFactor;
  this.mascotName = mascotName;
  this.servings = 4;
};

// Make an INSTANCE of that class / console.log it
var captainCrunch = new Cereal(
  'Captain Crunch',
  9,
  10,
  'Supreme Admiral Dr. Professor Crunch Ruler of the Beasts of the Earth'
);

// CHALLENGE II
// Take the cereal constructor from before and add a method to the prototype   
Cereal.prototype.makeYouFat = function() {
  console.log('eating ' + this.name + ' will make you fat!');
};

// CHALLENGE III
// Take the cereal constructor from before and add two methods to the prototype.
// - pour()
// - buyNewBox()
//
// You get 4 servings/bowls of cereal in a new box.  
// Have pourBowl() tell you when you are almost out 
// and then the box is empty and you need to buy more.
Cereal.prototype.pour = function() {
  if (this.servings <= 0) {
    console.log("None left!");
    return;
  }
  this.servings--;
  if (this.servings === 1) {
    console.log("You are almost out!");
  } else if (this.servings === 0) {
    console.log("Empty! Time to buy a new box.");
  }
  console.log("Munch munch");
};

Cereal.prototype.buyNewBox = function() {
  this.servings = 4;
};