const net = require('net');

const server = net.createServer();
const port = 3001;

server.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});

// set up a place to store ALL connections to the server
const sockets = [];

server.on('connection', (socket) => {
  // add the socket to our collection of sockets
  sockets.push(socket);

  console.log('a new client has connected!');

  // send a welcome message to a connected client
  socket.write('Welcome to our chat room!');

  // set the encoding on the connection
  socket.setEncoding('utf-8');

  // listen for incoming messages
  socket.on('data', (message) => {
    console.log('message from client:', message);

    // loop through all connections
    for (const socketConnection of sockets) {
      // echo the message (aka write) to each connection
      socketConnection.write(message);
    }
  });
});
