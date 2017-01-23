angular.module("WestWorld", []);


//===============================================\\
//==============Delores Controller===============\\
//===============================================\\
angular.module("WestWorld")
  .controller("Delores", deloresCtrl);

deloresCtrl.$inject = ["RobotFactory", "$timeout"];

function deloresCtrl (RobotFactory, $timeout) {
  console.log('ROBOT', RobotFactory)
  window.robo1 = RobotFactory
  var dCtrl = this;
  
  dCtrl.thingsInThePark = RobotFactory.things;
  
  $timeout(function(){
    dCtrl.thingsInThePark.push({
      name : "RoboHobos",
      price : 0
    })
  }, 5000)
 
}

//===============================================\\
//==============Bernard Controller===============\\
//===============================================\\

angular.module("WestWorld")
  .controller("Bernard", bernardCtrl);

bernardCtrl.$inject = ["RobotFactory"];

function bernardCtrl (RobotFactory) {
  var bCtrl = this;
  window.robo2 = RobotFactory
  bCtrl.thingsInThePark = RobotFactory.things;
  
  bCtrl.higherPrice = function(thingFromThePark) {
    console.log("Making " + thingFromThePark.name + " more expensive!");
    thingFromThePark.price += 1.02
  }
  
}

//===============================================\\
//===============Robot Factory===================\\
//===============================================\\

angular.module("WestWorld")
  .factory("RobotFactory", roboFactory);
           
function roboFactory () {
  var thingsInThePark = [
    {
      name : "Train",
      price : 40000,
      keywords : [
        "choo",
        "spensive"
      ]
    },
    {
      name : "Trees",
      price : 4,
      keywords : [
        "grow",
        "green"
      ]
    },
    {
      name : "Maze",
      price: 39.95,
      keywords : [
        "scary",
        "lost"
      ]
    },
  ];
  
  //   ALL FACTORIES MUST HAVE A RETURN STATEMENT!
  return {
    things : thingsInThePark
  }
  
}



