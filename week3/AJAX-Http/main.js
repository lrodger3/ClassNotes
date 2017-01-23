angular.module("Pokeymans", []);

angular.module("Pokeymans")
  .controller('Trainer', trainerCtrl)
  .factory('PokeCenter', pokeFactory)

trainerCtrl.$inject = ['PokeCenter']

function trainerCtrl (PokeCenter){
  var trainer = this;
  trainer.greeting = "Gotta Catch`em All!";
  
  PokeCenter
    .getPokedex()
    .then(function(response){
      console.log('pokedex response', response)
      trainer.pokeymans = response.data.pokemon_entries;
    })
  
  trainer.getPokemon = function(pokemonID){
    PokeCenter
      .getPokemon(pokemonID)
      .then(function(response){
        console.log('RESPONSE!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)

        trainer.pokemon = response.data; // Attach it to the controller object we can use it in HTML

        trainer.pokemon.abilities.forEach(function(abilityObj){
          console.log(abilityObj.ability.name);
        });

      });
  }
    console.log('Pokemon!', trainer.pokemon);
}             

pokeFactory.$inject = ['$http']

function pokeFactory ($http) {
  var baseURI = "http://pokeapi.co/api/v2"; // Since all of the endpoints in the pokemon API use this url as a base, we store it in a variable
  
  function getPokemon (pokemonID) {
    
    return $http({
      method : 'GET',
      url    : baseURI + '/pokemon/' + pokemonID
    })
    
  }
  
  function getPokedex () {
    return $http({
      method  : 'GET',
      url     : baseURI + '/pokedex/1'
    })
  }
  
  
  return {
    getPokemon : getPokemon,
    getPokedex : getPokedex
  }
}