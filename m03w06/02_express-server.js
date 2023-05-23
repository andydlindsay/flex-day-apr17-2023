const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8501;

// middleware
// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);

app.use(morgan('dev'));
// app.use((request, response, next) => {
//   // console.log('inside the middleware!!!');
//   request.secretKey = 'provided by the middleware';

//   // if (!loggedIn) {
//   //   response.send('you are not allowed to be here');
//   // }

//   next();
// });

// GET /about
app.get('/about', (request, response) => {
  // console.log('request.secretKey', request.secretKey);
  response.status(204);
  response.send('Learn more about us here!');
});

// GET /home
app.get('/home', (request, response) => {
  if (1 == 1) {
    return response.send('This is the home page');
  }

  response.send('This is the home page');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
