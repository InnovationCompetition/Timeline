var express = require('express');
var path = require('path');
var app = express();

// 发布时删掉
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/static/html/layout.html'));
});

app.listen(3000, function () {
  console.log('server listening on port 3000...');
});
