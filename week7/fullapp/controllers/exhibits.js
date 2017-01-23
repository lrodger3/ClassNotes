// Require model
var Exhibit = require('../models/exhibits');

// Export our route handlers
module.exports = {
  
  get : (req, res) => {
    Exhibit.find({}, (err, exhibs)=>{
      if(err) {
        console.log("Something bad happened! EXHIB-GET".red);
        return res.send(err)
      }
      
      res.send(exhibs);
      
    })
  },
  
}

