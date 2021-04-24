const Site = require('../models/Site');
const keys = require('../config/keys');

module.exports.getsites = async (req, res) => {
    let candidate = await Site.findOne({url: req.body.url});
    if (candidate){
        res.status(200).json(candidate);
    } else {
        res.status(404).json({
            message: 'Такой url отсутсвует.'
        });
    }
};