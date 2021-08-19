const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function (req, res) {
  res.send('Holaa');
});

app.get('/json', function (req, res) {
  res.json({ message: 'Holaa' });
});

app.listen(config.port, function () {
  console.log(`listener http://localhost:${config.port}`);
});
