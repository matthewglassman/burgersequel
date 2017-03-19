//Requiring the models

var db = require("../models");

//Routing

module.exports = function(app){

	//Get burgers
	app.get("/api/burgers", function(req, res){
		db.BurgerOrder.findAll({}).then(function(dbBurgerOrder){
			res.json(dbBurgerOrder);
		});
	});

	//Create new burgers
	app.post("/api/burgers", function(req, res){
		db.BurgerOrder.create({
			burger_name: req.body.name,
			devoured: req.body.devoured
		}).then(function(dbBurgerOrder){
			res.json(dbBurgerOrder)
		});

		// db.BurgerOrder.create([
		// 	"burger_name"
		// 	],[
		// 	req.body.name
		// 	]).then(function(dbBurgerOrder){
		// 		res.json(dbBurgerOrder);
		// });
	});

	//update burgers
	app.put("/api/:burger_name", function(req, res){
		//var condition = "burger_name = '" + req.params.burger_name + "'";

		db.BurgerOrder.update({
			devoured: req.body.devoured
		}, {
			where: {
				burger_name: req.params.burger_name
			}
		}).then(function(dbBurgerOrder){
			res.json(dbBurgerOrder);
		});

};



// var express = require("express");
// var router = express.Router();

// var burger = require("../models/burger.js");

// router.get("/", function(req, res){
// 	burger.all(function(data) {
// 		var handlebarsObject = {
// 			burgers: data
// 		};
// 		console.log(handlebarsObject);
// 		res.render("index", handlebarsObject);
// 	});
// });

// router.post("/", function(req, res){
// 	burger.create([
// 		"burger_name"
// 		], [
// 		req.body.name
// 		], function(){
// 			res.redirect("/");
// 	});
// });

// router.put("/:burger_name", function(req, res) {
// 	var condition = "burger_name = '" + req.params.burger_name + "'";
	
// 	console.log("condition", condition);

// 	burger.update({
// 		devoured: req.body.devoured
// 	}, condition, function(){
// 		res.redirect("/");
// 	});
// });

// module.exports = router;