var mongoose = require('mongoose');

var FoodSchema = mongoose.Schema({
  name: String,
  restaurant: String,
  calories: Number,
  carbs: Number,
  category: String
});

module.exports = mongoose.model('Food', FoodSchema);
