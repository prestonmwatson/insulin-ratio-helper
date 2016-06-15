var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {type: String},
  password: {type: String},
  email: {type: String},
  insulin: {type: Number}
})


User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);;
