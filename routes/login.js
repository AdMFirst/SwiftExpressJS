var express = require('express');
var router = express.Router();
var pool = require('./db')

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Swift Login Page' });
});

router.post('/', async function(req, res) {
  
  var email = req.body.emailLogin;
  var password = req.body.pwLogin;

  const result = await pool.query("select * from \"userBasic\" where email = ($1) and password = ($2)", [email, password])
  if(!result.rows[0]){
    res.render('login', { title: 'Swift Login Page' });
    
  } else {
    res.render('index', {title: 'Welcome'})
  }
});

module.exports = router;
