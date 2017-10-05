var express = require('express');
var router = express.Router();

/* GET home page. */
//define routes

router.get('/', function(req, res){
  res.render('index');
});

router.post('/proceed', function(req, res){
  console.log('Proceed clicked');
  var guestUser = req.body.guestUser;
  //console.log('user : ' + guestUser);
  res.render('welcome', {userName: guestUser});
});

router.get('/welcome', function(req, res){
  res.render('welcome');
});

router.get('/about', function(req, res){
  res.render('about');
});

router.get('/contact', function(req, res){
  res.render('contact');
});


router.post('/cardmall', function(req, res){
  console.log('cardmall clicked');
  var guestUser = req.body.guestUser;
  //console.log('user : ' + guestUser);
  res.render('cardmall', {userName: guestUser});
});


module.exports = router;
