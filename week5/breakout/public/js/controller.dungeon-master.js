angular.module('Crawler')
  .controller('dungeonMaster', dungeonMasterCtrl);

dungeonMasterCtrl.$inject = ['tortureChamber'];

function dungeonMasterCtrl (tortureChamber) {
//   console.log('Torture : ', tortureChamber);
  var dm = this;
  console.dir(dm)
  dm.gameStarted = false;
  
  dm.greeting = 'Welcome to the dungeon';
  
  dm.createHero = function(){
//     debugger
    dm.PC = new tortureChamber.Player(dm.newPlayer); // This will construct a new Player character and store it on the controller object
//     debugger
    console.log(dm.PC)
    
    // Start the game!
    dm.gameStarted = true;
    dm.greeting = "Prepare to die!";
    dm.currentRoom = tortureChamber.roomMaker();
//     debugger
  }
  
  dm.makeRoom = function(){
     dm.currentRoom = tortureChamber.roomMaker();

  }
  
}

// new dungeonMasterCtrl() // Angular calls our controller functions as constructors.  this => {}, and we attach properties to it