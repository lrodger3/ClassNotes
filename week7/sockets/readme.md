# Sockets

## What are sockets?
- Connections that stay open between a client and a server
- Bidirectional communication
  - Single TCP connection
- Provide the capability of realtime communication
  - AIM

## To use or not to use?
- is realtime data necessary or not?
- be careful of the amt of data you are using

### Other options
- polling (http requests on an interval)
- no automatic refresh, `pull-to-refresh`


## Socket.io
> Awesome node module for both the front/back end

### Most important methods in socket.io
- `on`   : handle an event (catch)
- `emit` : create an event (throw)


### It's all just events!
```javascript
$(document).on('click', function(){

})
socket.on('myEvent', function(){

})
app.get('/', function(req, res){

})
ng-click="myClicker()"
```

### SocketServer and Rooms

SocketServer is the central point that ties all clients together
- most events go through the socket server
  - client => socketserver => recipients
  
the socket server can `emit` to everyone that is connected OR it can `emit` to a specific `room`

A `room` is like a private group - a client can join their socket connection to a `room` and receive messages broadcast to that room








