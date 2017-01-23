var alice = {
  name : 'Alice',
  eatWeirdCake : function(numCakes, meal) {
    console.log(arguments);
    return this.name + ' ate ' + numCakes + ' weird cake(s) for ' + meal + '!' // this should refer to the alice object
  }
}

// console.log( alice.eatWeirdCake() ); // `this` refers to alice

var cakeTime = alice.eatWeirdCake;

// var name = "billy bob"; // sets window.name
// console.log( window.cakeTime() ); // `this` becomes the window object

// Using the call method to control `this`

// console.log( cakeTime.call(4) ); // invoke the cakeTime function, but use the alice object as the value for this

// console.log(alice.eatWeirdCake())


var transactions = [];

for( var i = 0; i < 500; i++){
  transactions.push(Math.random() * 100)
}

Math.max.apply(null, transactions); // Instead of hardcoding, 500 separate arguments to Math.max, we can use the apply method to pass them all in

// function doAllTheThings () {
  
//   [].forEach.call(arguments, function(arg){
//     console.log(arg);
//   })
  
// }



// Creating a bound version of cakeTime

var aliceIsHungry = cakeTime.bind(alice, 2, 'second breakfast');


var person = {
  name : 'Gertrude',
  lazyGreeting : function() {
    setTimeout((function(){
      console.log("Hello! My Name is " + this.name)
    }).bind(this), 1500);
  }
}











