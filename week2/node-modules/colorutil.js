// Exports allows us to make things in this file accessible in other files when they `require` it
module.exports = {
    luminosity : function(red, green, blue) {
        return 0.2126*red + 0.7152*green + 0.0722*blue
    },
    
    otherColorStuff : function(){},
    
    darken : function(red, green, blue){
        return [
            red * 0.8, 
            green * 0.8, 
            blue * 0.8
        ]
        
        // return {
        //     red : red * 0.8,
        //     green : green * 0.8,
        //     blue : blue * 0.8
        // }
    },
    bestColors : [
        'peachpuff',
        'dodgerblue'
    ]
}; // When this file is required by another, the require statement will evaluate to this exports statement

// 1,020,000
// `1.02M`