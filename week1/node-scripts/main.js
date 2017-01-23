// console.log('running!', process.argv[2]);

// for(var i = 2; i < process.argv.length; i++){
//   console.log(process.argv[i] + ' was passed into this file');
// }

// function reverser (str) {
//   var reversedStr = ''; // Need to construct a new string
  
//   for( var i = str.length - 1; i >= 0; i--){
//     reversedStr += str[i];
//   }
  
//   return reversedStr
// }

function reverser (str) {
  
  str = str || ''; // str should be itself if it exists or an empty string
  
  return str
    .split('') // split into an array
    .reverse() // flip the order
    .join('') // turn the array back into a string
    .toUpperCase() // uppercase it so it looks like we're mad
  
}

// "DIY Christmas Stuff"
// "diy-christmas-stuff"

console.log( reverser(process.argv[2]) )

