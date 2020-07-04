var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'JHSUSTAIN',
    banner: '/images/banner/MAIN_BANNER.png',
    mission_images: [ '/images/main/MAIN1.png', '/images/main/MAIN2.png', '/images/main/MAIN3.png', '/images/main/MAIN4.png' ]
  });
});

router.get('/Our-Team', function(req, res, next) {
  res.render('team', { title: 'Our Team', banner: '/images/banner/TEAM_BANNER.png' });
});

router.get('/Our-Services', function(req, res, next) {
  res.render('services', { title: 'Our Services', banner: '/images/banner/SERVICES_BANNER.png' });
});

router.get('/Past-Ongoing-Projects', function(req, res, next) {
  res.render('projects', { title: 'Past & Ongoing Projects', banner: '/images/banner/PROJECTS_BANNER.png' });
});

router.get('/test', function(req, res, next) {
  res.render('project_detail', { title: 'test' });
});

router.get('/In-the-News', function(req, res, next) {
  res.render('news', { title: 'In the News', banner: '/images/banner/NEWS_BANNER.png' });
});

router.get('/Work-with-Us', function(req, res, next) {
  res.render('contact', { title: 'Work with Us', banner: '/images/banner/CONTACT_BANNER.png' });
});

module.exports = router;
