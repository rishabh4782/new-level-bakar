var express = require('express');

var app = express();

//configure app

// use middleware

//define routes

app.get('/', function(req, res){
  res.send('hello express!!')
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('ready on port 3000 or ' + port);
});

























// const http = require('http');
//
// const hostname = '192.168.1.9';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
