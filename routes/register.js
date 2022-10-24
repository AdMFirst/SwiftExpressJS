var express = require('express');
var router = express.Router();
var pool = require('../db')

router.get('/', function(req, res, next) {
  res.render('register', { title: 'Swift Registration Page' });
});


module.exports = router;