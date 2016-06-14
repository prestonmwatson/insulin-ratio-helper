var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Food = require('../models/food');
var mongoose = require('mongoose');
var router = express.Router();
var Logout = require('../models/user');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {loggedIn :req.isAuthenticated(), page:'home'});
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', {loggedIn :req.isAuthenticated(), page:'login'});
});

router.post('login', passport.authenticate('local'), function(req, res, err) {
  res.redirect('profile');
});

/* GET Signup page. */
router.get('/signup', function(req, res, next){
  res.render('signup', {loggedIn :req.isAuthenticated(), page:'signUp'});
});

/* POST Signup page. */
router.post('/signup', function(req, res, next) {
  var user = new User({ username: req.body.username });
  User.register(user, req.body.password, function(error) {
    if (error) {
      res.send(error);
    } else {
      req.login(user, function(loginError) {
        if (loginError) {
          res.send(loginError)
        } else {
          res.redirect('/profile')
        }
      });
    }
  });
});

router.get('/logout', function(req, res, next){
  req.logout();
  res.redirect('/');
});

router.get('/profile', function(req, res, next) {
  res.render('profile', {loggedIn :req.isAuthenticated(), page:'profile'});
});

// router.get('/search', function(req,res, next) {
//   res.render('search');
// });

function checkUser(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = router;
