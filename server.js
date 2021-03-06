const express = require('express');
const app = express();
const sunsets = require('./sunsets');
const errorSunset = require('./errorSunset');
const mockData = require('./mockData');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
}

// app.use(function (req, res, next) {
//   res.status(404).json(errorSunset);
// });

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.get('/sunsets', (request, response) => {
  response.status(200).json(sunsets);
});

app.get('/json', (request, response) => {
  response.status(200).json(mockData);
});

app.listen(3000, () => {
  console.log('Hey man, Express is up on localhost:3000');
});

