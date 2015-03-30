var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('AboutMe', { title: 'About Me' });
});

/* GET Portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('ContactMe', { title: 'Contact Me' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});

module.exports = router;
