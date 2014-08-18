'use strict';
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80);
console.log('Server running at http://127.0.0.1:80/');
setInterval(function() {
  console.log('Glorious Pants', Math.random());
}, 3000);