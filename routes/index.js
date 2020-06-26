var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JHSUSTAIN' });
});

router.get('/Our-Team', function(req, res, next) {
  res.render('team', { title: 'Our Team' });
});

router.get('/Our-Services', function(req, res, next) {
  res.render('services', { title: 'Our Services' });
});

router.get('/Past-Ongoing-Projects', function(req, res, next) {
  res.render('projects', { title: 'Past & Ongoing Projects' });
});

router.get('/In-the-News', function(req, res, next) {
  res.render('news', { title: 'In the News' });
});

router.get('/Work-with-Us', function(req, res, next) {
  res.render('team', { title: 'Work with Us' });
});

module.exports = router;
