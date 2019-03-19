var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var router = require('./controllers/burgers_controller.js');
var app = express();


var port = process.env.PORT || 3000;
app.listen(port);

app.use(express.static(__dirname + '/'));
// Middle ware
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', router);

