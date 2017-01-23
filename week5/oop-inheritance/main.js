// // Wizard Class
// function Wizard (wizardInfo) {
//   this.name   = wizardInfo.name
//   this.color  = wizardInfo.color
//   this.spells = wizardInfo.spells
// }

// Wizard.prototype.castSpell = function(spellIndex){
  
//   if(this.spells[spellIndex]){
//     return this.name + " casts " + this.spells[spellIndex]
//   }
//   else{
//     return this.name + "'s spell fizzles out :("
//   }
// }

// // Constructing Wizards
// var gandalf = new Wizard({
//   name : 'Gandalf',
//   color : 'white',
//   spells : ['You Shall Not Pass!', 'Summon Fireworks', 'King De-Demonizer']
// });

// var drStrange = new Wizard({
//   name : 'Dr. Strange MD',
//   color : 'Blue/Red/Green',
//   spells : ['World Bending', 'Teleport']
// });


// // Alchemist class
// function Alchemist (alchemistInfo) {
//   Wizard.call(this, alchemistInfo); // Call the Wizard function and make the Alchemist `this`, the Wizard `this`
// //   new Wizard(wizardInfo)
 
//   this.potions = alchemistInfo.potions;
// }

// Setting up the inheritance chain
// Alchemist.prototype = new Wizard({}); // Setting the Alchemist prototype to a new, empty wizard object
// Alchemist.prototype.constructor = Alchemist; // Because the line above destroys the old Alchemist prototype object, we have to reset the constructor property

// Alchemist.prototype.makeGold = function(){
//   return this.name + ' makes some gold! $$$'
// }

// var paolo = new Alchemist({
//   name : 'Paolo',
//   color : 'Green',
//   spells : ['Recycling', 'Immortality'],
//   potions : ['Blue Potion', 'Mojito']
// })



// ====================== \\
//      NEW ES6 SYNTAX    \\
// ====================== \\
'use strict'

class Wizard {
  constructor(wizardInfo){
    this.name   = wizardInfo.name;
    this.color  = wizardInfo.color;
    this.spells = wizardInfo.spells;
  }
  
  castSpell(spellIndex) {
    if(this.spells[spellIndex]){
      return this.name + " casts " + this.spells[spellIndex]
    }
    else{
      return this.name + "'s spell fizzles out :("
    }
  }
}

var gandalf = new Wizard({
  name : 'Gandalf',
  color : 'white',
  spells : ['You Shall Not Pass!', 'Summon Fireworks', 'King De-Demonizer']
});

var drStrange = new Wizard({
  name : 'Dr. Strange MD',
  color : 'Blue/Red/Green',
  spells : ['World Bending', 'Teleport']
});


class Alchemist extends Wizard {
  
  constructor(alchemistInfo){
    super(alchemistInfo); // analogous to Wizard.call(this, alchemistInfo)
    this.potions = alchemistInfo.potions;
  }
  
  makeGold () {
    return this.name + " made some gold $$$$"
  }
  
  // override the castSpell from Wizard
  castSpell(spellIndex) {
    return super.castSpell(spellIndex) + "\n It was so alchemisty"
  }
}

var paolo = new Alchemist({
  name : 'Paolo',
  color : 'Green',
  spells : ['Recycling', 'Immortality'],
  potions : ['Blue Potion', 'Mojito']
})







