var express = require('express');
var router = express.Router();
var portfolioCtrl = require('../controllers/portfolio');

// all posts start with /portfolio
router.get('/about', portfolioCtrl.about);

module.exports = router;
