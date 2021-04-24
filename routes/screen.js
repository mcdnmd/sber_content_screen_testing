const express = require('express');
const controller = require('../controllers/screen');
const router = express.Router();

// localhost:3000/api/screen/getsites
router.post('/getsites', controller.getsites);

module.exports = router;