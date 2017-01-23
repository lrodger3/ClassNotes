// Require the model that we're dealing with
var Booze = require('../models/booze.js');

// Controller files are responsible for creating the functions that handle routes

module.exports = {
  
  create : (req, res) =>{
    // creating new documents are typically done with a POST request.  Data lives on `req.body`
    
    // Take our request body and use it to make a new document
    var newBooze = new Booze(req.body);
    
    // Save doc to DB
    newBooze.save((err, doc)=>{
      res.send(doc); // Send down the newly created document
    });
    
  },
  
  read : (req, res)=>{
    Booze.find({}, (err, boozes)=>{
      res.send(boozes);
    });
  },
  
  effOnly : (req, res)=>{
    Booze.find({effervescence : true}, (err, effys)=>{
      res.send(effys);
    });
  }
  
}