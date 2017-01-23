// var sentence = "I went to the store";

// // This function has side-effects
// function capWords () {
//   sentence = sentence.toUpperCase();
//   return sentence
// }

// // This function is pure - no side-effects
// function capWordsPure(sentence) {
//   sentence = sentence.toUpperCase()
//   return sentence
// }


// ============== \\
//  Functional Practice \\
// ============== \\

var oceans = [
  "Pacific", 
  "Atlantic", 
  "antarctic",
  "Arctic", 
  "Indian", 
  "Bering Strait",
  "Caspian Sea",
];

// map will execute the callback we pass to it once for each element in the `oceans` array

// Anonymous Function
// oceans.map(function(value, index, array){
//   console.log(value, index, array);
// });
// setInterval takes a callback and executes it every ___ ms (2nd argument is ms)
// setInterval(function(){
//   console.log('woohoo!' + Math.random());
// }, 1000);

// Named Function
function oceanMap (value, index, array){
  console.log(value, index);
  
  // map constructs a NEW array based on the return values in the callback function
  return value.toUpperCase()
}

var cappedOceans = oceans.map(oceanMap);
console.log(cappedOceans);

// Filter -  returns a new array that is a subset of the old array but with only the values that pass some sort of test
// Run the filter method on oceans and only keep the oceans that start with the letter 'a'

function oceanFilter (value, index) {
  //   console.log('VALUE : ', value)
  return value.charAt(0).toUpperCase() === 'A'
}
var oceansThatStartWithA = oceans.filter(oceanFilter);

console.log(oceansThatStartWithA);


// make an array of all of first letters of the ocean and only keep the 'a's

// Chaining map and filter
var aList = oceans
  .map(function(val){
    return val.charAt(0) // only the first letter
  })
  .filter(function(val){
    return val.toLowerCase() === 'a'
  })

// forEach is a non-functional version of map, it also doesn't care about a return statement
// forEach typically works through side-effects
aList.forEach(function(val){
  console.log(val);
  // val => aList[i]
});


// Reduce
var startingMoney = 500;
var purchases = [
  {
    bought : "Monkey",
    cost   : 100
  },
  {
    bought : "Pull Over from The Weekends",
    cost   : 200
  },
  {
    bought : "Scarf from Big Lots",
    cost   : 12.75
  }
]

// How much we got left?

function debit(runningTotal, purchase){
  console.log("Running Total", runningTotal);
  console.log("Purchase", purchase.bought, purchase.cost);
  console.log('Amt Left', runningTotal - purchase.cost)
  console.log('=-=-=-=-=-=-=-=--=-=-');

  return runningTotal - purchase.cost
  
}

var currentBalance = purchases.reduce( debit, startingMoney );

console.log(currentBalance);




