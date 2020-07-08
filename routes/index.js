var express = require('express');
var router = express.Router();

var mysql_odbc = require('../database/db_conn')();
var connection = mysql_odbc.init();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'JHSUSTAIN',
    banner: '/images/banner/MAIN_BANNER.png',
    mission_images: [ '/images/main/MAIN1.png', '/images/main/MAIN2.png', '/images/main/MAIN3.png', '/images/main/MAIN4.png' ],
    mobile_mission_images: [ '/images/main/mobile_main1.png', '/images/main/mobile_main2.png', '/images/main/mobile_main3.png', '/images/main/mobile_main4.png' ]
  });
});

router.get('/Our-Team', function(req, res, next) {
  let memberList = {
    1: [],
    2: [],
    3: [],
    4: []
  };
  let projectList;

  let query = "select member_id, member_name, member_job, member_email, member_image from member;";
  connection.query(query, (err, result) => {
      if (err) {
        return res.send(err);
      }
      for (let i = 0; i < result.length; i++) {
        memberList[result[i].member_id].push(result[i]);
        query = "select m_project_title, m_project_start, m_project_end from member_project where member_id = ?";
      }
      console.log(memberList);
  });
  res.render('team', {
    title: 'Our Team',
    banner: [ '/images/banner/TEAM_BANNER.png', '/images/banner/team_banner_mobile.png' ]
  });
});

router.get('/Our-Services', function(req, res, next) {
  res.render('services', {
    title: 'Our Services',
    banner: [ '/images/banner/SERVICES_BANNER.png', '/images/banner/services_banner_mobile.png' ]
  });
});

router.get('/Past-Ongoing-Projects', function(req, res, next) {
  res.render('projects', { title: 'Past & Ongoing Projects', banner: '/images/banner/PROJECTS_BANNER.png' });
});

router.get('/test', function(req, res, next) {
  res.render('project_detail', { title: 'test' });
});

router.get('/In-the-News', function(req, res, next) {
  res.render('news', {
    title: 'In the News',
    banner: [ '/images/banner/NEWS_BANNER.png', '/images/banner/news_banner_mobile.png' ]
  });
});

router.get('/Work-with-Us', function(req, res, next) {
  res.render('contact', { title: 'Work with Us', banner: '/images/banner/CONTACT_BANNER.png' });
});

module.exports = router;
