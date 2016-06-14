var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Foods = require('../models/food');
var mongoose = require('mongoose');
var apiKey = process.env.LCBO_KEY;
var request = require('request');


module.exports = router;
