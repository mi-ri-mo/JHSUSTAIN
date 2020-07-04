var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'JHSUSTAIN',
    banner: '/images/MAIN_BANNER.png',
    mission_images: [ '/images/MAIN1.png', '/images/MAIN2.png', '/images/MAIN3.png', '/images/MAIN4.png' ]
  });
});

router.get('/Our-Team', function(req, res, next) {
  res.render('team', { title: 'Our Team', banner: '/images/TEAM_BANNER.png' });
});

router.get('/Our-Services', function(req, res, next) {
  res.render('services', { title: 'Our Services', banner: '/images/SERVICES_BANNER.png' });
});

router.get('/Past-Ongoing-Projects', function(req, res, next) {
  res.render('projects', { title: 'Past & Ongoing Projects', banner: '/images/PROJECTS_BANNER.png' });
});

router.get('/test', function(req, res, next) {
  res.render('project_detail', { title: 'test' });
});

router.get('/In-the-News', function(req, res, next) {
  res.render('news', { title: 'In the News', banner: '/images/NEWS_BANNER.png' });
});

router.get('/Work-with-Us', function(req, res, next) {
  res.render('contact', { title: 'Work with Us', banner: '/images/CONTACT_BANNER.png' });
});

module.exports = router;
