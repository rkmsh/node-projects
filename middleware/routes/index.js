var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Middleware' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Middleware' });
})

module.exports = router;
