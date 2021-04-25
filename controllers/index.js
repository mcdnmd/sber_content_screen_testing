const Site = require('../models/Site');

module.exports.getCards = async (req, res) => {
    
    //const candidate = await Site.findOne({});
    let candidate = [
        {
            'name': 'kontur.ru',
            'text': 'Ну мы документы вертим',
            'img': 'https://im0-tub-ru.yandex.net/i?id=aecc5bbe20a064a1524983d324bcc486&n=13',
            'link': 'https://hackathon-sber.site/01-a2129356-5a4a-46c4-82be-d2ecbae59b45/check0/'
        }]
    res.render('sites', { title: 'Библиотека', active: 'sites', sites: candidate})
};