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

router.get('/search', function(req, res, next) {
  Food.find({ }, function(err, foods) {
    if (err) console.log(err);

    res.json(foods);
  });
});

router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile', {"userId":req.user.username, loggedIn :req.isAuthenticated(), page: 'profile'});
});

router.get('/foods', function(req, res, next) {
  Food.find({ }, function(err, foods) {
    if (err) console.log(err);

    res.json(foods);
  });
});

router.post('/foods', function(req, res, next) {
  var name = req.body.name;
  var restaurant = req.body.restaurant;
  var calories = req.body.calories;
  var carbs = req.body.carbs;
  var category = req.body.category;

  var newFood = Food({
      name: name,
      restaurant: restaurant,
      calories: calories,
      carbs: carbs,
      category: category
  });

  // Save the food
  newFood.save(function(err, food) {
      if (err) console.log(err);

      res.json(food);
  });
});

//Get individual foods from API
router.get('/foods/:id', function(req,res,next){
  var foodId = req.params.id;
  console.log('foodId =' + foodId);

  res.render('food', {page: 'singleFood'});
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({ }, function(err, users) {
    if (err) console.log(err);

    res.json(users);
  });
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var insulin = req.body.insulin;

  var newUser = User({
      username: username,
      password: password,
      email: email,
      insulin: insulin,
  });

  // Save the user
  newUser.save(function(err, user) {
      if (err) console.log(err);

      res.json(user);
  });
});

router.get('/users/:user_id', function(req, res, next) {
  var userId = req.params.id;
  User.find({ "_id": userId }, function(error, data) {
    console.log(data);
    res.json(data[0]);
  })
})

router.get('/users/:user_id/ratio', function(req, res, next) {
  var userId = req.params.id;
  User.find({ "_id": userId }, function(error, data) {
    console.log(data);
    res.json(data[0]);
  })
})

router.delete('/users/:user_id', function(req, res) {
  User.remove({
    _id: req.params.user_id
  }, function(err, user) {
    if (err)
      res.send(err);

    User.find(function(err, users) {
      if(err)
        res.send(err)
      res.json(users)
    });
  });
});

function checkUser(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = router;
