var mongoose = require('mongoose');

var Food = mongoose.model('Food', {
  name: String,
  restaurant: String,
  calories: Number,
  carbs: Number,
  category: String
});

module.exports = mongoose.model('Food', Food);
