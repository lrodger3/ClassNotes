var socket = io(); // this is what makes the connection to the socket server

// setInterval(function(){
//  /*
//   $http.get('/some/api')
//     .then(function(resp){
//       socket.emit("stockTick", resp.data);
    
//   })
//   */
//   socket.emit("stockTick", Math.random());
// }, 3000);


// socket.on("newPrice", function(price){
//   document.getElementById("chat-messages").innerHTML += price + "<br>";
// });

socket.on("chat", function(message){
  document.getElementById("chat-messages").innerHTML += message.username + ' : ' + message.message + "<br>";
});

function sendChat(){
   socket.emit("chatMessage", {
     username : document.getElementById("username").value,
     message : document.getElementById("chat").value
                              });
}