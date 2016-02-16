var express = require('express');
var Sequelize = require('sequelize');
var app = express();


var sequelize = new Sequelize("postgres://" + process.env.POSTGRES_USER + ":@localhost/blogapplication");

var Users = sequelize.define('users', {
	username: Sequelize.STRING,
	emailadress: Sequelize.TEXT,
	password: Sequelize.STRING
});

sequelize.sync().then(function () {
	Users.create({
		username: 'birds are chirpy',
		emailadress: 'chirp chirp',
		password: 'chirp chirp'
	});
});



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});