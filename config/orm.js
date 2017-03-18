var connection = require("../config/connection.js");

// function printQuestionMarks(num) {
// 	var arr = [];

// 	for (var i = 0; i < num; i++){
// 		arr.push("?");
// 	}

// 	return arr.toString();
// }

function objToSql(ob){
	var arr = [];

	for (var key in ob){
		if (Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + "=" + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	all: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	create: function(table, col, val, cb){
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += col.toString();
		queryString += ") ";
		queryString += "VALUES (?) ";

		console.log(queryString);

		connection.query(queryString, val, function(err, result) {
			if (err){
				throw err;
			}
			cb(result);
		});
	},

	update: function(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString +=	objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;