'use strict'

angular.module('Crawler')
  .factory('tortureChamber', tortureChamberFact)

// tortureChamberFact.$inject = ["seedData"];

function tortureChamberFact () {
  
  class Player{
    constructor(playerInfo){
      this.name = playerInfo.name;
      this.race = playerInfo.race;
      this.class = playerInfo.class;
      this.weapon = playerInfo.weapon || null;
      this.items = playerInfo.items || [];
      this.health = 100;
      this.attack = 35;
    }
  }
  
  class Room{
    constructor(roomInfo){
      this.size = roomInfo.size;
      this.setting = roomInfo.setting;
      this.loot = roomInfo.loot;
      this.monster = roomInfo.monster;
    }
  }
  
  class Item{
    constructor(itemInfo){
      this.name = itemInfo.name; 
      this.weapon = itemInfo.weapon || false; 
      this.healValue = itemInfo.healValue || 0;
    }
  }
  
  class Monster{
    constructor(monsterInfo){
      this.name = monsterInfo.name;
      this.species = monsterInfo.species;
      this.health = monsterInfo.health;
      this.motivation = monsterInfo.motivation;
      this.attack = monsterInfo.attack;
    }
  }
  
  var itemList = [
    {
      name : "Bo Staff",
      weapon : true,
      healValue : 0
    },
    {
      name : "ChainMail",
      weapon : false,
      healValue : 5
    },
    {
      name : "Holy Bourbon Grenade",
      weapon : true,
      healValue : 15
    }
  ]
  
  var monsterList = [
    {
      name : 'Henrietta',
      species : 'Disgruntled Postal Worker',
      health : 30,
      motivation : 'Thinks you have the lost package she\'s  been looking for!',
      attack : 50,
    },
    {
      name : 'Shrieker',
      species : '3-header Siren Ghoul',
      health : 75,
      motivation : 'Wants to drink your blood, evenly distributed amongst it\'s three heads!',
      attack : 25,
    },
    
  ]
  
  
//   var roomSizes = ['s', 'm', 'l' ...]
//   var roomSetting = ['PO', 'VEP', ...]
  
  var roomList = [
    {
      size : 'Medium',
      setting : 'A victorian-era parlor.'
    },
    {
      size : 'Smell',
      setting : 'Teenager\'s bedroom.  There\'s laundry everywhere!'
    },
    {
      size : 'Large',
      setting : 'Post Office... You have to wait in line to get anything done here.'
    },
    {
      size : 'Large',
      setting : 'The place'
    },
    {
      size : 'XXL',
      setting : "You find yourself in a spoopy graveyard!  Watch out for skelentons"
    },
    {
      size : 'Medium',
      setting : 'A DIFFERENT victorian-era parlor.'
    },
  ]
  
  function roomMaker () {
    // This function will make a room, items, and a monster so that our player can interact with them
    
    // plucking a random room
//     var baseRoom = roomList[Math.floor(Math.random() * roomList.length)];
    
    var baseRoom = _.sample(roomList);
//      debugger
    // create a random item and store it in the room
//     baseRoom.loot = new Item(itemList[Math.floor(Math.random() * itemList.length)]);
    
    baseRoom.loot = new Item(_.sample(itemList));
//     debugger
    // create a random monster and store it in the room
//     baseRoom.monster = new Monster(monsterList[Math.floor(Math.random() * monsterList.length)]);
    
    baseRoom.monster = new Monster(_.sample(monsterList));
//     debugger
    // Create the Room object and return it
    return new Room(baseRoom);
  }
  
  
  
  return {
    Player : Player,
    roomMaker : roomMaker
  }
}