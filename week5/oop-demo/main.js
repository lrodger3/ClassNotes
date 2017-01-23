'use strict'
//========================================\\
//            City of Thieves             \\
//========================================\\

// Described how our Thief objects will look
class Thief {
  
  constructor(name){
    this.name = name;
    this.dead = false;
//     this.skill = 0 - 100;
    this.stuff = [
      "Gold",
      "Jewels",
      "Electronics",
      "Food",
      "Booze",
      "Weapons"
    ];
  }
  
  // burgle prototype method
  burgle(victim){
    // bobBarker.burgle(aladdin)
    //  this => refers to the thief DOING the stealing (bobBarker)
    //  victim => refers to the thief BEING stolen from (aladdin)
    
    if(victim.stuff.length !== 0){
    
      this.stuff.push( victim.stuff.pop() ); // Remove a 'stuff' from the victim and add it to the stealer

      console.log(`${this.name} just stole something from ${victim.name}!`); 
      console.log(`${this.name} now has ${this.stuff.join(', ')}.`);
    
    }
    else{
      // Victim has no items
      
      victim.dead = true; // Victim dies!
      
      console.log(`${this.name} attempted to steal from ${victim.name} but they didn't have any stuff!`)
      console.log(`${victim.name} is now dead!`);
      
    }
  }
}
// Construct an instance of the Thief class
// var bilbo = new Thief("Bilbo");

var thiefNames = [
  "Bilbo",
  "Jesse James",
  "Aladdin",
  "Thief 2",
  "Pink Panther",
  "Hamburglar",
  "CatWoman",
  "Danny Ocean",
  "Bob Barker",
  "Adam Sandler"
];


// Construct array of thieves to populate the city
var cityOfThieves = [];

for(var i = 0; i < thiefNames.length; i++){
  
  cityOfThieves.push( new Thief(thiefNames[i]) );
  
}


// This is the function that picks a burglar / victim and starts the burgling
function randomBurgle () {
  
  var burglarIndex = Math.floor(Math.random() * cityOfThieves.length);
  
  var victimIndex = Math.floor(Math.random() * cityOfThieves.length);
  
  if( burglarIndex !== victimIndex){
  
    var burglar = cityOfThieves[burglarIndex];
    var victim = cityOfThieves[victimIndex];
    
    burglar.burgle(victim);
  }
}

var counter = 0;
// Create an interval to kick our simulation off
var burgleInterval = setInterval(function(){
  counter++
  // Bring out yer dead
  cityOfThieves = cityOfThieves.filter(function(thief){
    return !thief.dead // Only keep the thieves that are alive
  });
  
  if(cityOfThieves.length > 1) {
    randomBurgle(); // Pick 2 and burgle
  }
  else{
    console.log( `${cityOfThieves[0].name} is the only thief left!  There can be only one!` );
    
    clearInterval(burgleInterval); // Stop the interval from executing until the end of time
    
    console.log(`It took ${counter} iterations!`)
  }
  
}, 0);










