var express = require('express'),
    io = require('socket.io'),
    fileServer = express.static('public'),
    PORT = process.env.PORT || 9001;
    app = express();

app.use(fileServer);

app.get('/', (req, res)=>{
  res.send('hello!')
});

// set a safe 'server' variable inside of app
app.set("server", app.listen(PORT, ()=>{
  console.log(`Server up at ${PORT}`);
}));


// Make our socket server
var socketServer = io( app.get("server") );


// Listen for a user to connect
socketServer.on('connection', (socket)=>{
  // `socket` represents a user's connection to socketServer
  
  console.log(`User connected!`);
  
  
  // Catch stockTick
//   socket.on('stockTick', (stockPrice)=>{
//     console.log(stockPrice);
    
//     // broadcast the stockPrice to socket users
//     socketServer.emit("newPrice", stockPrice);
    
//   });
  
   socket.on('chatMessage', (message)=>{
    console.log(message);
    
    socketServer.emit("chat", message);
    
  });
  
  socket.on('disconnect', ()=>{
    console.log(`User disconnected!`);
  });
  
});







