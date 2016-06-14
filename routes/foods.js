var express = require('express');
var router = express.Router();
var Food = require('../models/food');
var mongoose = require('mongoose');
var User = require('../models/user');
var passport = require('passport');
var router = express.Router();

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

module.exports = router;

