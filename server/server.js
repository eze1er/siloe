const express  = require("express");
const socketio = require("socket.io");

const http = require('http');
const app = express();
const server = http.createServer(app);

// reel communication
const io = socketio(server);

app.get('/', (req, res) => {
  res.json({result: 'ok'});
})

io.on('connection', () => {
  console.log("Someone has connected");
})


server.listen(8080, () => console.log('app is listen in port 8080'));
