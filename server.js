// modules
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');

var Bear = require('./app/models/bear');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8082;

var router = express.Router();

// middleware
router.use(function(req, res, next){
  console.log('Request!');
  next();
});
router.get('/', function(req,res){
  res.json({ message: 'welcome to the api' });
});
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);