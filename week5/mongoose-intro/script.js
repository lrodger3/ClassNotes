var mongoose = require('mongoose');

//Connect to the Database (use db)
mongoose.connect('mongodb://localhost/santasworkshop');

// Mongoose expects us to provide SCHEMA for our Documents/Collections
// We need to specify WHAT a document looks like
// And then, name the collection those documents should live in

// Create Document Schema
var elfSchema = mongoose.Schema({
  name        : {type : String, unique : true},
  profession  : String,
  disposition : String,
  age         : {type : Number, default : 90}
});
// unqiue, required, default => very useful Schema paramters

// Create the collection and hand off the document schema
var Elf = mongoose.model("Elf", elfSchema);
// Elf becomes our entry point into the collection
// db.elves

// // Creates a new Elf document in the elves collection
// var keebley = new Elf({
//   name : 'Galadriel',
//   profession : 'Queen',
//   disposition : 'Creepy',
//   age : Infinity
// });

// // Actually save it to the DB
// keebley.save((err, elf)=>{
//   console.log(err, elf);
// });
// console.log('After Save!');


// Other Mongoose Methods

// Find -  returns an ARRAY of DOCUMENTS
// Elf.find({}, (err, elves)=>{
//   console.log('Err : ', err);
// //   console.log('Evles : ', elves);
  
//   console.log(elves.map((elf)=>{
//     return elf.name
//   }));
  
// });

// FindOne - returns the first document it comes across that matches your query

// Update - updates the documents that match your query
// Elf.update({name : "Galadriel"}, {age : 7946}, (err, elf)=>{
//   console.log('ERR : ', err);
//   console.log('ELF : ', elf);
// })


// findAndUpdate
// findOneAndUpdate - finds AND updates the document
// Elf.findOneAndUpdate(
//   {name : "Galadriel"}, 
//   {disposition : "Cheery"},
//   {new : true}, // otherwise you get the old one...
//   (err, elf)=>{
//     console.log('ERR : ', err);
//     console.log('ELF : ', elf);
//   });


// findById
// findByIdAndUpdate



// Chainable methods in Mongoose

// Sort
// Elf
//   .find({})
//   .sort('name')
//   //   .limit(2) // often used in pagination
//   //   .skip() // often used in pagination
//   //   .populate() // deals with data relationships
//   .exec( (err, elves)=>{
//     console.log(elves)
// } );















