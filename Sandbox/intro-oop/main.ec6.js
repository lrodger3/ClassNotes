// ES6/EC2015 syntax

// Create a function prototype for the class Cat
class Cat {
  constructor(name, color, breed, clawedness, brattiness) {
    console.log('EC6 this!', this);
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.clawedness = clawedness;
    this.brattiness = brattiness;

  }

  meow() {
    console.log(this.name + ' goes meow!');
  }
}

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
class Cereal {
  constructor(name, sweetness, crunchFactor, mascotName) {
    this.name = name;
    this.sweetness = sweetness;
    this.crunchFactor = crunchFactor;
    this.mascotName = mascotName;
    this.servings = 4;
  }

  // CHALLENGE II
  // Take the cereal constructor from before and add a method to the prototype
  makeYouFat() {
    console.log('Eating ' + this.name + '\'s cereal will make you fat');
  }

  // CHALLENGE III
  // Take the cereal constructor from before and add two methods to the prototype.
  // - pour()
  // - buyNewBox()
  //
  // You get 4 servings/bowls of cereal in a new box.  
  // Have pourBowl() tell you when you are almost out 
  // and then the box is empty and you need to buy more.
  pour() {
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
  }

  buyNewBox() {
    this.servings = 4;
  }
}

// Make an INSTANCE of that class / console.log it
var captainCrunch = new Cereal(
  'Captain Crunch',
  9,
  10,
  'Supreme Admiral Dr. Professor Crunch Ruler of the Beasts of the Earth'
);