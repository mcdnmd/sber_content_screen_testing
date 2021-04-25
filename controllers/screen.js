const Site = require('../models/Site');
//const keys = require('../config/keys');
const fetch = require("node-fetch");

module.exports.getSiteContent = async (req, res) => {
    fetch(req.body.url)
        .then(response => response.text())
        .then(data  => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.send(data);
        });
}
       