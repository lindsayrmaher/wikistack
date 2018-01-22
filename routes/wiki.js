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
	res.json(page);
})

router.get('/add', function(req, res, next) {
	page.save().then(function(savedPage){
  	res.redirect(savedPage.route); // route virtual FTW
	}).catch(next);
})

router.get('/:urlTitle', function(req, res, next) {
	Page.findOne({
		where: {
			urlTitle: req.params.urlTitle
		}
	})
	.then(function(foundPage) {
		res.render('../views/wikipage', {page: foundPage})
	})
	.catch(next);
})

module.exports = router;


