var mongoose = require('mongoose');

var Exhibit = mongoose.Schema({
  
  animals : [{type : String}],
  name : {type : String},
  size : {type : Number, default : 1},
  indoors : {type : Boolean, default : false},
  cleaningSchedule : {
    mon : Boolean,
    tue : Boolean,
    wed : Boolean,
    thu : Boolean,
    fri : Boolean,
  },
  
});

module.exports = mongoose.model("Exhibit", Exhibit);