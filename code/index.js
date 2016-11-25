var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
  console.log('request /');
});

app.listen(3000, function () {
  console.log('server listening on port 3000...');
});
