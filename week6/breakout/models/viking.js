var mongoose = require('mongoose');

// Define Schema
var vikingSchema = mongoose.Schema({
    firstName      : String,
    lastName       : String,
    
    favoriteWeapon : String,
    berserker      : Boolean,
  
    favoriteGod    : String
  
});

// Export our model
module.exports = mongoose.model('Viking', vikingSchema);

