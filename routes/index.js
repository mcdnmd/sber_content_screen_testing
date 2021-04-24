var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Главная', active: 'main' });
});

router.get('/sites', function(req, res, next) {
  let site_list = [
      {'name': 'sber.ru', 'text': 'Ну мы чакатон проводим', 'img': 'https://im0-tub-ru.yandex.net/i?id=6b09bcb8040700cb54a2c0ee2897d1fe&n=13'},
    {'name': 'kontur.ru', 'text': 'Ну мы документы вертим', 'img': 'https://im0-tub-ru.yandex.net/i?id=aecc5bbe20a064a1524983d324bcc486&n=13'},
    {'name': 'ya.ru', 'text': 'Ну мы второй курс на стажировки не берем', 'img': 'https://im0-tub-ru.yandex.net/i?id=b34ca6de9776827a3612dc47015388d8&n=13'}]
  res.render('sites', { title: 'Библиотека', active: 'sites', sites: site_list});
});

router.get('/site_state', function(req, res, next) {
  res.render('site_state', { title: 'Библиотека', active: 'site state', sitename: 'state' });
});

router.get('/login', function (req, res, next){
  res.render('login', { title: 'Авторизация', active: 'main'});
})

module.exports = router;
