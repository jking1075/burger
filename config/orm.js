//Import the MySQL connection object:

	var connection = require ('./connection.js');

	// Create - 1) creation initial database itself; 2) !!!! Creating new rows inside a database - INSERT
	// Read - select
	// Update - Set
	// Delete from
var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM '+tableInput+';', function(err, result){
			if(err) throw err;
			cb(result)
		})
	}
}

module.exports = orm;
// function getAllRecords(callback){
// 	var query = "SELECT * FROM burgers";
//		connection.query(query, function (error, results, fields) {
// 		callback(results);
// 	});

//}

//getAllRecords(function(arr){
//	for(var i = 0; i< arr.length; i++){
//		console.log(arr[i].burger_name);
//	}
//});
