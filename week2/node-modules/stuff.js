var colorThings = require('./colorutil.js');

console.log(colorThings)

console.log( colorThings.luminosity(100, 225, 40) )

console.log( colorThings.darken(100, 200, 150) )

colorThings.bestColors.forEach(function(color){
    console.log('The best color is ' + color)
})