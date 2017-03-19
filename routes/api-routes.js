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

});
};