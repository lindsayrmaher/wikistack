const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page; 
var User = models.User; 

router.get('/', function(req, res, next) {
	res.redirect('/');
})

router.post('/', function(req, res, next) {
	const page = Page.build({
		title: req.body.title,
		content: req.body.content
	})

	page.save();
	res.redirect('/')
	// res.json(req.body);
})

router.get('/add', function(req, res, next) {
	res.render('../views/addpage');
})

module.exports = router;


