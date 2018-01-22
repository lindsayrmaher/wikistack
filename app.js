var morgan = require('morgan');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var routes = require('./routes');
var models = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(morgan('dev'));

var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes'));

app.get('/', function(req, res) {
	res.render('../views/index');
})

models.db.sync({force: true})
.then(function() {
	app.listen(3000, function() {
		console.log("it's listening on port 3000!")
	});
}).catch(console.error);