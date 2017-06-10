var mysql = require('mysql');
var assert = require("assert");
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'ultronvideo'
});

connection.connect(function(err) {
	assert.ifError(err);
	console.log("connecton established");

	connection.query('SELECT * from movies', function(err, rows) {
		assert.ifError(err);
		console.log('Data received from DB:',rows);
	});
});