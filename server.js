//express
//method-override
//body-parser

var express = require ('express');
var methodOverride = require ('method-override');
var bodyParser = require ('body-parser');
var expressHandlebars = require ('express-handlebars');

var app = express();
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var port = 3306;
app.listen(port);





