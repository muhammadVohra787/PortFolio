/* index.js, Muhammad vohra, 301257640, 2023/09/29 */

var express = require('express');
var router = express.Router();


router.get('/home', (req, res) => {
    res.render('home',{title:'HOME'});
  });
  router.get('/', (req, res) => {
    res.render('home.ejs',{title:'HOME'});
  });
  router.get('/about', (req, res) => {
    res.render('about.ejs',{title:'About Me'});
  });
  router.get('/projects', (req, res) => {
    res.render('projects.ejs',{title:'My Projects'});
  });
  router.get('/services', (req, res) => {
    res.render('service.ejs',{title:'My Services'});
  });
  router.get('/contact', (req, res) => {
    res.render('contact.ejs',{title:'Contact Me'});
});

  module.exports = router;