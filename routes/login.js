var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Swift Login Page' });
});

router.post('/', function(req, res) {
  
  var email = req.body.emailLogin;
  var password = req.body.pwLogin;

  res.send(req.body)
});

module.exports = router;
