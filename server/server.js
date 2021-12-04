const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/test.html'));
});

app.get('/hello', (req, res) => res.send('Hello World!'))

http.listen(80, function () {
  console.log('listening on 80')
}); 