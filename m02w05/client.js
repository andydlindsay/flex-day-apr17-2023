const net = require('net');

const config = {
  host: 'localhost',
  port: 3001
};

const socket = net.createConnection(config);

// set encoding on the socket connection
socket.setEncoding('utf-8');

// listen for incoming messages
socket.on('data', (message) => {
  console.log('server says:', message);
});

// set encoding on standard in
process.stdin.setEncoding('utf-8');

// listen for the "data" event to occur
process.stdin.on('data', (messageFromStdin) => {
  socket.write(messageFromStdin);
});
