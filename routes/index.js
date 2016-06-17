var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Food = require('../models/food');
var mongoose = require('mongoose');
var router = express.Router();
var Logout = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {loggedIn :req.isAuthenticated(), page:'home'});
});

/* GET Search page. */
router.get('/search', function(req, res, next) {
  Food.find({ }, function(err, foods) {
    if (err) console.log(err);

    res.json(foods);
  });
});

/* GET Foods page. */
router.get('/foods', function(req, res, next) {
  Food.find(function(err, foods) {
    if (err) console.log(err);

    res.json(foods);
  });
});

/* POST Foods. */
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

router.get('/foods/:id', function(req,res,next){
  var foodId = req.params.id;
  Food.find({ "_id": foodId }, function(error, data) {
    console.log(data);
    // res.json(data[0]);
  })
});

router.get('/restaurants', function(req,res, next) {
  Food.find({"restauruant": req.data}, function(error, data) {
    console.log(data);
    res.json(data);
  })
})

//Authentication function for session
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = router;
