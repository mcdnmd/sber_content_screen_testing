const Site = require('../models/Site');

module.exports.getCards = async (req, res) => {
    //const candidate = await Site.findOne({});
    let candidate = [
        {
            'name': 'sber.ru',
            'text': 'Ну мы чакатон проводим',
            'img': 'https://im0-tub-ru.yandex.net/i?id=6b09bcb8040700cb54a2c0ee2897d1fe&n=13',
            'link': 'localhost:3000/'
        },
        {
            'name': 'kontur.ru',
            'text': 'Ну мы документы вертим',
            'img': 'https://im0-tub-ru.yandex.net/i?id=aecc5bbe20a064a1524983d324bcc486&n=13',
            'link': 'https://vk.com'
        },
        {
            'name': 'ya.ru',
            'text': 'Ну мы второй курс на стажировки не берем',
            'img': 'https://im0-tub-ru.yandex.net/i?id=b34ca6de9776827a3612dc47015388d8&n=13',
            'link': 'https://kontur.ru'
        }]
    res.render('sites', { title: 'Библиотека', active: 'sites', sites: candidate})
};