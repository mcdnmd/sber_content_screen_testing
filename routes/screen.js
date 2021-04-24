const express = require('express');
const controller = require('../controllers/screen');
const router = express.Router();

// localhost:3000/api/screen/getsite
router.post('/getsite', controller.getSiteContent);

module.exports = router;