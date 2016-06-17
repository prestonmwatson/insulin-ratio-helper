var mongoose = require('mongoose');

//Food Schema

var Food = mongoose.model('Food', {
  name: String,
  restaurant: String,
  calories: Number,
  carbs: Number,
  category: String,
  ratio: Number
});

module.exports = mongoose.model('Food', Food);
