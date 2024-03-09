// Dependencies
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files
app.use(express.static(__dirname + '/public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Store connected users
const users = {};

// Socket.io connection handler
io.on('connection', (socket) => {
  // Handle new user joining
  socket.on('join', (username) => {
    // Store the username and socket ID
    users[socket.id] = username;
    // Broadcast to all users that a new user has joined
    socket.broadcast.emit('userJoined', username);
  });

  // Handle chat messages
  socket.on('chatMessage', (message) => {
    // Broadcast the message to all users
    io.emit('message', { user: users[socket.id], message: message });
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    // Broadcast to all users that a user has left
    socket.broadcast.emit('userLeft', users[socket.id]);
    // Remove the user from the users object
    delete users[socket.id];
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});