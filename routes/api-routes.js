//Requiring the models
var express = require("express");
var router = express.Router();
var db = require("../models");

//Routing

//module.exports = function(app){

	//Get burgers
	router.get("/", function(req, res){
		db.burgers.findAll({}).then(function(data){
			var handlebarsObject = {
				burgers: data
			};
			res.render("index", handlebarsObject);
		});
	});

	//Create new burgers
	router.post("/", function(req, res){
		db.burgers.create({
			burger_name: req.body.name,
			//devoured: req.body.devoured
		}).then(function(){
			res.redirect("/");
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
	router.put("/:burger_name", function(req, res){
		//var condition = "burger_name = '" + req.params.burger_name + "'";

		db.burgers.update({
			devoured: req.body.devoured
		}, {
			where: {
				burger_name: req.params.burger_name
			}
		}).then(function(){
			res.redirect("/");
	});

});
module.exports=router;