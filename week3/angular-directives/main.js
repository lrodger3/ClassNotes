angular.module("StarWars", []);


angular.module("StarWars")
  .controller("yoda", yodaTime);

function yodaTime () {
  // Every function has its own value for 'this'
  // The way angular calls your controller function makes `this` an empty object
  
  var yCtrl = this;
  
  // Setting some default variables
  yCtrl.greeting = "Welcome to the StarWars collectible site!";
  yCtrl.newToy = {}; // even though the ngModel would create this object, its good practice to create it in your controller
  
  
  yCtrl.collectibles = [
    {
      name  : "Jabba The Hutt",
      img   : "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/XoIAAOSw-jhT~8IU/$_58.JPG",
      price : 24.95
    },
    {
      name  : "Lando Calrissian",
      img   : "http://www.sideshowtoy.com/mas_assets/jpg/2153_press03-001.jpg",
      price : 50
    },
    {
      name  : "Generic Wookiee 2",
      img   : "http://www.newsite.rebellegion.com/wp-content/uploads/2014/03/untitled-150x150.png",
      price : 7.50
    }
  ];
  
  yCtrl.addToy = function(){
    console.log("Adding new toy...");
    yCtrl.collectibles.push(yCtrl.newToy); // Take the object newToy that came from ngModel and push it into the collectibles array
    yCtrl.newToy = {}; // this will reset the form AND create a new object
  }
  
  yCtrl.switchSide = function(toy){
    console.log('TOY SWITCHIN SIDES', toy);
    toy.darkSide = !toy.darkSide; // flip the darkSide property
  }
  
  console.log(yCtrl);
  
}              

// NgRepeat
// for(var i = 0; i < yCtrl.collectibles; i++){
//   var toy = yCtrl.collectibles[i]
//   toy.name
//   toy.img
//   toy.price
// }


