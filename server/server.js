const express  = require("express");
const socketio = require("socket.io");

const http = require('http');
const app = express();
const server = http.createServer(app);
const ikea = require('ikea-name-generator');

// reel communication
const io = socketio(server);
app.get('/', (req, res) => {
  res.json({result: 'ok'});

})
let users = [];

io.on('connection', (socket) => {
  
  const name = ikea.getName();
  console.log("Someone has connected", name);
  users.push(name);
  socket.emit('INITIAL', {name, users});
  socket.broadcast.emit('NEW_USER', {name});
  socket.name = name;

  socket.on('disconnect', () => {
    console.log('Someone is disconnected! ', socket.name);
    socket.broadcast.emit('DISCONNECT_USER', {name: socket.name});
    users.filter((name) => name !== socket.name);
  })
})



server.listen(8080, () => console.log('app is listen in port 8080'));
