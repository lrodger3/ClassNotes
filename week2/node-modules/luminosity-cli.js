var ColorUtil = require('./colorutil.js'); // Look at this file path, run the file, and give us the exports

console.log(ColorUtil);

// ColorUtil.luminosity()
// ColorUtil.otherColorStuff()

console.log( ColorUtil.luminosity(process.argv[2], process.argv[3], process.argv[4]) )

console.log(
    'Darken!',
    ColorUtil.darken(process.argv[2], process.argv[3], process.argv[4])    
)