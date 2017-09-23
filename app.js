var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// use middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + 'bower_components')));


//define routes

app.get('/', function(req, res){
  res.render('index');
});


app.post('/proceed', function(req, res){
  console.log('Proceed clicked');
  var guestUser = req.body.guestUser;
  res.redirect('/welcome')
});

app.get('/welcome', function(req, res){
  res.render('welcome');
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
