var request = require('request-promise');
var baseURI = 'http://kanyerest.xyz';

module.exports = {
  album : (req, res) =>{
    // we need to make a request to the kanye rest api
    request({
      method : 'GET',
      url : `${baseURI}/api/album/${req.query.albumName}`
    })
      .then((resp)=>{
        console.log('RESPONSE FROM KANYE : ', resp);
        res.send(resp);
      });
    
  },
}

