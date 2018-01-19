var morgan = require('morgan');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var nunjucks = require('nunjucks');
var routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(morgan('dev'));

var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/index'));

app.get('/', function(req, res) {
	res.render('index');
})