var express = require('express');
var router = express.Router();
var portfolioCtrl = require('../controllers/portfolio');

// all posts start with /portfolio
router.get('/about', portfolioCtrl.about);
router.get('/projects', portfolioCtrl.projects);
router.get('/contact', portfolioCtrl.contact);

module.exports = router;
