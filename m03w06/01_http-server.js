const http = require('http');
const port = 54321;

const server = http.createServer();

server.on('request', (request, response) => {
  console.log(request.method, request.url); // GET /

  if (request.method === 'GET' && request.url === '/about') {
    response.write('This is the about page');
  }

  if (request.method === 'GET' && request.url === '/home') {
    response.write('Welcome to our website!');
  }

  response.end();
});

server.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
