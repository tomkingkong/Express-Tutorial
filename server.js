const express = require('express');
const app = express();
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
