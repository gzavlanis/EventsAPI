const mysql = require('mysql');

// create a connection
var connection = mysql.createConnection({
	multipleStatements: true,
	host: 'localhost',
	user: 'root',
	password: 'gz861994'
});

connection.connect(function (err) {
	if (err) throw err;
	console.log('Connection was successful!');

	// create database
	connection.query('CREATE DATABASE if not exists myEvents;', function (err) {
		if (err) throw err;
		console.log('Database created.');
	});

	// create a table
	var sql1 = 'USE myData;';
	var sql2 = 'CREATE TABLE if not exists Events (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50) NOT NULL, start DATETIME NOT NULL, end DATETIME NOT NULL, description VARCHAR(50)), complited BOOLEAN NOT NULL';
	connection.query(sql1, function (err) {
		if (err) throw err;
	});
	connection.query(sql2, function (err) {
		if (err) throw err;
		console.log('Table created.');
	});
});

module.exports = connection;