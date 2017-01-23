// Model file for booze collection
var mongoose = require('mongoose');

// Define our data schema (document)
var boozeSchema = mongoose.Schema({
  abv           : Number,
  name          : String,
  flavorNotes   : Array,
  effervescence : {type : Boolean, default : false}
});

// Create the model (collection)
module.exports = mongoose.model('Booze', boozeSchema);