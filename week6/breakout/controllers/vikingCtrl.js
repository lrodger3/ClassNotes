var Viking = require('../models/viking');

module.exports = {
  
  create : (req, res) =>{
    
    var newViking = new Viking(req.body);
    
    newViking.save((err, viking)=>{
      if(err) {
        return res.send(err);
      }
      
      res.send(viking);
      
    });
    
  },
  
  get : (req, res) =>{
    // Get One
    // /api/vikings/89349rjdjer8234982
    if(req.params.id){
      Viking.findOne({_id : req.params.id}, (err, viking)=>{
        if(err){
          return res.send(err)
        }
        
        if(viking){
          res.send(viking)
        }
        else{
          res.send({badThing : 'No Viking found brah'});
        }
        
      });
    }
    // Get Many
    // /api/vikings
    else{
      Viking.find({}, (err, vikings)=>{
        if(err) {
          return res.send(err);
        }
        res.send(vikings);
      });
    }
    
  }
  
}