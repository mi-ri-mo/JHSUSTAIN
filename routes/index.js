var express = require('express');
var router = express.Router();

var mysql_odbc = require('../database/db_conn')();
var connection = mysql_odbc.init();

/* GET home page. */
router.get('/', function(req, res, next) {
  let projectList = {};
  let newsList = {};

  let query1 = "SELECT project_id, project_title, project_summary, project_image, project_period FROM projects;";
  let query2 = "SELECT news_id, news_title, news_content, news_date FROM news;";

  connection.query(query1 + query2, (err, result) => {
    if (err) {
      return res.send(err);
    }
    projectList = result[0];
    newsList = result[1];
    for (let i = 0; i < projectList[0].length; i++) {
      projectList[projectList[i].project_id] = projectList[i];
    }
    for (let i = 0; i < newsList[0].length; i++) {
      newsList[newsList[i].news_id] = newsList[i];
    }

    res.render('index', {
      title: 'JHSUSTAIN',
      banner: '/images/banner/MAIN_BANNER.png',
      mission_images: [ '/images/main/MAIN1.png', '/images/main/MAIN2.png', '/images/main/MAIN3.png', '/images/main/MAIN4.png' ],
      mobile_mission_images: [ '/images/main/mobile_main1.png', '/images/main/mobile_main2.png', '/images/main/mobile_main3.png', '/images/main/mobile_main4.png' ],
      projectList: projectList,
      newsList: newsList
    });
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
  let projectList = {};
  let query = "SELECT project_id, project_title, project_summary, project_image FROM projects ORDER BY project_id DESC";
  connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    }
    for (let i = 0; i < result.length; i++) {
      projectList[result[i].project_id] = result[i];
    }
    res.render('projects', {
      title: 'Past & Ongoing Projects',
      banner: [ '/images/banner/PROJECTS_BANNER.png', '/images/banner/project_banner_mobile.png' ],
      projectList: projectList
    });
  });
});

router.get('/projects/:idx', function(req, res, next) {
  const idx = req.params.idx;

  let query = "SELECT * FROM projects WHERE project_id = ?";
  connection.query(query, [idx], (err, result) => {
    if (err) {
      return res.send(err);
    }
    res.render('project_detail', { title: result[0].project_title, project: result[0] });
  });
});

router.get('/In-the-News', function(req, res, next) {
  let newsList = {};
  let query = "SELECT news_id, news_title, news_content, news_date FROM news ORDER BY news_id DESC";
  connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    }
    for (let i = 0; i < result.length; i++) {
      newsList[result[i].news_id] = result[i];
    }
    res.render('news', {
      title: 'In the News',
      banner: [ '/images/banner/NEWS_BANNER.png', '/images/banner/news_banner_mobile.png' ],
      newsList: newsList
    });
  });
});

router.get('/In-the-News/:idx', function(req, res, next) {
  const idx = req.params.idx;

  let query = "SELECT * FROM news WHERE news_id = ?";
  connection.query(query, [idx], (err, result) => {
    if (err) {
      return res.send(err);
    }

    res.render('news_detail', { title: result[0].news_title, news: result[0] });
  });
});

router.get('/Work-with-Us', function(req, res, next) {
  res.render('contact', {
    title: 'Work with Us',
    banner: [ '/images/banner/CONTACT_BANNER.png', '/images/banner/contact_banner_mobile.png' ]
  });
});

router.post('', function(req, res, next) {

});

module.exports = router;
