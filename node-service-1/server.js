const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const dgram = require('dgram');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const UDP_PORT = 41234;
const UDP_HOST = 'localhost';

const udpClient = dgram.createSocket('udp4');

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', (msg) => {
    const message = JSON.stringify(msg);
    udpClient.send(message, UDP_PORT, UDP_HOST, (err) => {
      if (err) console.error('UDP message send error:', err);
      else console.log('UDP message sent:', message);
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3001, () => {
  console.log('Node.js Service 1 listening on port 3001');
});
