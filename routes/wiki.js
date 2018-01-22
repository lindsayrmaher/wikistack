const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
	res.send('made it to the first GET /wiki/ request');
})

router.post('/', function(req, res, next) {
	res.send('made it to the first POST /wiki/ request');
})

router.get('/add', function(req, res, next) {
	res.send('got to GET /wiki/add');
})

module.exports = router;