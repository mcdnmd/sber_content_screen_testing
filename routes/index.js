const express = require('express');
const passport = require('passport');
const controller = require('../controllers/index');
const router = express.Router();
const fetch = require("node-fetch");


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Главная', active: 'main' });
});

router.get('/sites', passport.authenticate('jwt', {session: false}), controller.getCards);


router.get('/site_state', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  res.render('site_state', {
    title: 'Библиотека',
    active: 'site state',
    sitename: 'state',
    link: req.body['site-link'] });
});

router.get('/login', function (req, res, next){
  res.render('login', { title: 'Авторизация', active: 'login'});
});

router.get('/signup', function (req, res, next){
  res.render('signup', { title: 'Регистрация', active: 'signup'});
});

router.get('/test_site/test_site', function(req, res, next) {
  res.render('test_site/test_site', { title: 'Библиотека', active: 'test example', sitename: 'test' });
});

router.get('/test_site/test_site_change', function(req, res, next) {
  res.render('test_site/test_site_change', { title: 'Библиотека', active: 'test example changed', sitename: 'test' });
});


module.exports = router;
