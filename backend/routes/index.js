var express = require('express');
var router = express.Router();

// List of APIs
var user = require('./api/user');
router.use('/api/user', user);

var blog = require('./api/blog');
router.use('/api/blog', blog);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('You shouldn\'t be accessing this page. Please stick with "/api", thank you!');
});

router.get('/api', function(req, res, next) {
  res.send('Welcome to the API!');
});

module.exports = router;
