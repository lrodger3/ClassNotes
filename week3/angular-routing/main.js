angular.module('CoffeeShop', ['ngRoute']);

// In order to use ngRoute as our router, we have to define what routes it should be looking for
angular.module('CoffeeShop')
  .config(Router);

Router.$inject = ['$routeProvider']; // Inject component from ngRoute

function Router ($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl   : '/home.html', // URL on your server that leads to an html file to be used for this page
      controller    : 'creamAndSugar', // String name of the angular controller you would like to use on this page
      controllerAs  : 'cCtrl'  // Object name for `this` in your html from the specified controller 
    })
    .when('/menu', {
      templateUrl   : '/menu.html',
      controller    : 'menu',
      controllerAs  : 'menu'
    })
    .when('/about', {
      templateUrl   : '/about.html',
    })
  
}


angular.module('CoffeeShop')
  .controller('creamAndSugar', cNs)

function cNs () {
  var cCtrl = this;
  
  cCtrl.greeting = "Welcome to Bonanza Coffee";
  
}

angular.module('CoffeeShop')
  .controller('menu', menuCtrl);


function menuCtrl () {
  var menu = this;
  
  menu.coffees = [
    {
      name : "French Roast",
      cost : 5
    },
    {
      name : "Chai Tea",
      cost : 8
    },
    {
      name : "Non-fat soy vanilla tofu latte with gluten-free coffee and fair trade, imitation, dolphin-safe kombucha.  Served in our 200% post-consumer recylced material cup",
      cost : 18
    }
  ]
  
}

