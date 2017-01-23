angular.module('JoeDirt', [])
  .controller('Brandy', brandyController)
  .controller("KickinWing", wingController)

// yourController(bigAssObject.$interval)

wingController.$inject = ['$interval'];
function wingController ($interval) {
  var wing = this;
  wing.greeting = "Gimme da fireworks";
//   $interval(function(){
//     console.log('squawk')
//   }, 0)
}

function brandyController() {
  var brandy = this;
  
  brandy.greeting = "Life's a garden, dig it!";
  
  brandy.characters = [
    "Joe",
    "Brandy",
    "Zander",
    "Kickin' Wing",
  ];
  
  
  brandy.charactersObject = {
    main : "Joe",
    supporting : "Brandy",
    fireworksGuy : "Kickin' Wing"
  }
  
  
  brandy.scenes = [
    {
      name : 'Intro',
      set : 'Trailer Park',
      actors : ['Joe', 'Brandy']
    },
    {
      name : 'Radio Station',
      set : 'Sound Booth',
      actors : ['Zander', 'Joe']
    },
    {
      name : 'Fireworks Finale',
      set : 'Fireworks Booth',
      actors : ["Kickin' Wing"]
    },
  ];
  
  brandy.removeActor = function(scene, actor){
    brandy.scenes[scene].actors.splice(actor, 1);
    console.log(brandy.scenes)
  }
  
  brandy.eventTastic = function(event) {
    console.log('EVENT', event);
    
    if (event.which === 13) {
      alert('ENTER')
    }
    
  }
}


/* 

<li ng-repeat="castMember in brandy.characters">{{castMember}}</li>

brandy.characters.forEach(function(castMember){
  document.write('<li>' + castMember + '</li>');
});



brandy.scenes.forEach(function(scene){
  scene
  
  scene.actors.forEach(function(actor){
    actor
  })

})

for(var i = 0; i < brandy.scenes.length; i++){
  brandy.scenes[i]
  
  for(var j = 0; j < brandy.scenes[i].actors.length; j++){
    brandy.scenes[i].actors[j]
  }

}


*/




