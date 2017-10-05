var express = require('express');
var router = express.Router();

var Cart = require('../models/cart');

var Product = require('../models/product');
//var Order = require('../models/order');

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


router.post('/cardmall', function(req, res, next) {
  console.log('cardmall clicked....');
  res.render('cardmall', {
      products: Product
    });
  });


router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/cardmall');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/cardmall');
  });
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', {
      products: null
    });
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  });
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);

  res.render('shop/checkout', {
    total: cart.totalPrice,
    noError: !errMsg
  });
});


module.exports = router;

function isLoggedIn(req, res, next) {
  console.log('is authenticated');
    return next();

}
