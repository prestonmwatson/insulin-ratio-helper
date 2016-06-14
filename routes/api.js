var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Food = require('../models/food');
var mongoose = require('mongoose');
var apiKey = process.env.DB_INSULIN_RATIO;
var request = require('request');


router.get('/foods', function(req, res) {
  Food.find(function(err, foods){
    if (err)
      res.send(err)

    res.json(foods);
  });
})

router.post('/foods', function(err, res) {
  Food.create({
    name: req.body.name,
    restaurant: req.body.restaurant,
    calories: req.body.calories,
    carbs: req.body.carbs,
    category: req.body.category
  }, function(err, food) {
    if (err)
      res.send(err);

    Food.find(function(err, foods) {
      if(err)
        res.send(err)
      res.json(foods);
    });
  });
});

router.delete('/foods/:food_id', function(req, res) {
  Food.remove({
    _id: req.params.food_id
  }, function(err, food) {
    if (err)
      res.send(err);

    Food.find(function(err, foods) {
      if(err)
        res.send(err)
      res.json(foods)
    });
  });
});

router.get('*', function(req, res) {
  res.sendfile('./views/index.ejs');
});

module.exports = router;
