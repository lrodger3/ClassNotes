angular.module("TMNT", ['ngAnimate']);

angular.module("TMNT")
  .controller("Sewer", sewerCtrl);

function sewerCtrl () {
  var manhole = this; // `this` is the object that our HTML will have access to
  
  manhole.title = "Cowabunga!";
  
  manhole.turtles = [
    {
      name : 'Leonardo',
      weapon : 'Swords',
      color : 'Blue'
    },
    {
      name : 'Michaelangelo',
      weapon : 'Nunchuks',
      color : 'Orange'
    },
    {
      name : 'Raphael',
      weapon : 'Sai',
      color : 'Red'
    },
    {
      name : 'Dontaello',
      weapon : 'Bo Staff',
      color : 'Purple'
    },
  ];
  
  manhole.confirmAdventure = function(turtle){
    console.log(turtle, turtle.name + " would like to go on an adventure");
    
    // Set my active turtle
    manhole.activeTurtle = turtle;
    
    // Pop up the modal
    $('#turtleAdventureModal').modal('toggle');
  }
  
  manhole.sendTurtle = function() {
    // Create / Set the adventuring property on our turtle
    manhole.activeTurtle.adventuring = true;
    
    // Dismiss modal
    $('#turtleAdventureModal').modal('toggle');
  }
  
  manhole.adventureFilter = function(turtle){
    return !turtle.adventuring
  }
  
  manhole.howManyTurtlesLeft = function(){
    
    return manhole.turtles.reduce(function(numTurts, turtle){
      if(!turtle.adventuring){
        return numTurts + 1
      }
      else{
        return numTurts
      }
    }, 0)
    
    
  }
  
  manhole.callHome = function() {
    
    // Iterate over the turtles and flip their adventuring property
    manhole.turtles.forEach(function(turtle){
      turtle.adventuring = false;
    })
  }
}




