var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {type: String, required: true, unique: true },
  password: {type: String, required: true },
  email: {type: String},
  insulin: {type: Number}
})

// User.pre('save', function(next) {
//   var user = this;

//   if(!user.isModified('password')) return next();

//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if(err) return next (err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// User.methods.comparePassword = function(password, cb) {
//   bcrypt.compare(password, this.password, function(err, isMatch){
//     if (err) return cb(err);
//     cb(isMatch);
//   });
// };

// exports.login = function(req, res) {
//     var username = req.body.username || '';
//     var password = req.body.password || '';

//     if (username == '' || password == '') {
//         return res.send(401);
//     }

//     db.userModel.findOne({username: username}, function (err, user) {
//         if (err) {
//             console.log(err);
//             return res.send(401);
//         }

//         user.comparePassword(password, function(isMatch) {
//             if (!isMatch) {
//                 console.log("Attempt failed to login with " + user.username);
//                 return res.send(401);
//             }

//             var token = jwt.sign(user, secret.secretToken, { expiresInMinutes: 60 });

//             return res.json({token:token});
//         });

//     });
// };

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);;
