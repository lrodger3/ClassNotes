// var days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday"
// ];

// // i++ // adds one to i and sets i to that new value
// // i += 1
// // i = i + 1
// days.push("Saturday")
// days.push("Sunday")
// days.push("Funday")
// days.push("SickDay")
// days.push("Saturday2")
// days.push("Saturday3")

// for(var i = 0; i < days.length; i++){
//   console.log( days[i], i );
// }

// // `ng-repeat` - like a for loop for html

// var i = 0;
// while(i < days.length){
//   console.log( days[i], i );
//   i++
// }

// do{
//   console.log( days[i], i );
//   i++
// }
// while(i < days.length)
  
  
// for(var minutes = 0; minutes < 10; minutes++){
  
//   for(var seconds = 0; seconds < 10; seconds++){
//     console.log('Minutes:', minutes, "|| Seconds:", seconds);
//   }
  
// }
  

// var user = {
//   name : 'Bill',
//   age : 204,
//   occupation:null
// }
  

var braveHeart = {
  title : 'Brave Heart',
  genre : 'War themed romantic comedy',
  year : 1995
}
  
var inception = {
  'title' : 'Inception',
  'genre' : 'SciFi Mind F***',
  'year' : 2011
}


var braveThumb = braveHeart;
braveThumb.genre = "Thumbtastic adventure";

var movieList = [braveHeart, inception]; // Collection (Array of Objects)

// Arrays are like a special kind of object with NUMBERED keys instead of STRING keys
// var days = {
//   0 : "Monday",
//   1 : "Tuesday",
//   2 : "Wednesday"
// }


// Some values are passed by VALUE (Primitives)

// Some are passed by REFERENCE (Non-Primitives)

var george = {
  name : 'george'
}

var george2 = {
  name : 'george'
}


// iterating over our collection to see each property on those elements
for(var i = 0; i < movieList.length; i++){
  
  console.log(`
    Title : ${movieList[i].title}
    Genre : ${movieList[i].genre}
    Year  : ${movieList[i].year}
    -=-=-==-==-=-=-=-=-=-=-=-=-=-=-=-=-=
  `)
//   console.log("Title : " + movieList[i].title)
}












  
