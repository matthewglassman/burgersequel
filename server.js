var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require("./routes/api-routes.js");
app.use("/", routes);

//app.listen(port);




// var express = require('express');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
// var exphbs = require('express-handlebars');

// var app = express();
// var PORT = process.env.PORT || 8080;

// var db = require("./models");

// //app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// //app.use(bodyParser.text());
// //app.use(bodyParser.json({type: "application/vnd.api+json"}))
// app.use(methodOverride('_method'));

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// var routes = require("./routes/api-routes.js");
// app.use("/", routes);



//Syncing models here
db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log("App listening on PORT " + PORT);
	});
});