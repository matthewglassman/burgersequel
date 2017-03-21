module.exports = function(sequelize, DataTypes){
	var burgers = sequelize.define("burgers", {
		burger_name:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	return burgers;
};
// var orm = require("../config/orm.js");

// var burger = {
// 	all: function(cb){
// 		orm.all("burgers", function(res){
// 			cb(res);
// 		});
// 	},
// 	create: function(col, val, cb){
// 		orm.create("burgers", col, val, function(res){
// 			cb(res);
// 		});
// 	},
// 	update: function(objColVals, condition, cb){
// 		orm.update("burgers", objColVals, condition, function(res){
// 			cb(res);
// 		});
// 	}
// };
// module.exports = burger;