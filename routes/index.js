const express = require('express');
const router = express.Router();
const controller = require('../controllers/index')


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Главная', active: 'main' });
});

router.get('/sites', controller.getCards);

router.get('/site_state', function(req, res, next) {
  res.render('site_state', {
    title: 'Библиотека',
    active: 'site state',
    sitename: 'state',
    link: req.body['site-link'] });
});

router.get('/login', function (req, res, next){
  res.render('login', { title: 'Авторизация', active: 'main'});
});

router.get('/test_site/test_site', function(req, res, next) {
  res.render('test_site/test_site', { title: 'Библиотека', active: 'test example', sitename: 'test' });
});

router.get('/test_site/test_site_change', function(req, res, next) {
  res.render('test_site/test_site_change', { title: 'Библиотека', active: 'test example changed', sitename: 'test' });
});


module.exports = router;
