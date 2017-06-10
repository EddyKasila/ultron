var express = require('express');

var app = express();

var bodyParser = require('body-parser')

var session = require('express-session')

var parseurl = require('parseurl');

app.use(session({
	// Only save back to the session store if a change was made
	resave: false,

	// Doesn't store data if a session is new and hasn't been
	// modified
	saveUninitialized: true,

	// The secret string used to sign the session id cookie
	secret: 'test',
}));

// This is another example of middleware.
app.use(function(req, res, next) {
	var views = req.session.views;

	// If no views initialize an empty array
	if (!views) {
		views = req.session.views = {};
	}

	// Get the current path
	var pathname = parseurl(req).pathname;

	// Increment the value in the array using the path as the key
	views[pathname] = (views[pathname] || 0) + 1;

	next();

});

app.use(bodyParser.urlencoded({
	extended: false
}))

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({
	defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//more imports here

// app.set ('port', process.env.PORT || 3000);

const port = 3000
app.use(express.static('./public'));

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
	console.log("Connection Established");

	app.get('/', function(req, res) {
		//req.session.name = users.name
		// var fs = require("fs")
		// var assert = require("assert");

		// fs.readFile("./movies.json", "utf8", function(err, data) {
		// 	assert.ifError(err);
		// 	var moviesObject = JSON.parse(data)
		// 	moviesObject.movies.map((movie) => {
		// 		movie.main_characters.map((character) => {
		// 			console.log(movie.title + " - " + character)
		// 		})
		// 	})
		// 	res.render('movie', {
		// 		movies: moviesObject.movies
		// 	});
		// })

		var query = 'select * from movies'

		console.log(query)
		connection.query(query, function(err, results) {
			assert.ifError(err);
			console.log('gotten the data', results);
			res.render('home', {
				movies: results
			});
		});
	});


	app.use(function(req, res, next) {
		console.log(req.method, req.url);
		next();
	});

	app.use(function(err, req, res, next) {
		console.log('Error: ' + err.message);
		next();
	});

	app.route('/register')
		.get(function(req, res) {
			console.log(req.session)
			res.render('register');
		})
		.post(function(req, res) {
			console.log("received something", req.body)
			req.body.role = "user"
			req.body.imagepath = ""
			var query = 'insert into users (' +
				Object.keys(req.body).map((key) => {
					return key
				}) +
				') values (' +
				Object.keys(req.body).map((key) => {
					return JSON.stringify(req.body[key])
				}) + ')'

			console.log(query)
			connection.query(query, function(err, results) {
				assert.ifError(err);
				console.log('inserted the data', results);
			});
		})

	app.route('/login')
		.get(function(req, res) {
			res.render('login');
		})
		.post(function(req, res) {
			console.log(req.body)
				//connect and query in users table for user data etc
			var query = `select * from users where username = "${req.body.username}" and password = "${req.body.password}"`;

			console.log(query)
			connection.query(query, function(err, results) {
				assert.ifError(err);
				console.log('gotten the data', results);
				if (results[0]) {
					res.redirect('/')
					login: results[0]
				} else {
					console.log(results)
					res.render('login', {
						err: "the err"
					})
				}
			})
		});

	app.get('/movie/:id', function(req, res) {
		var query = `select * from movies where id = ${req.params.id}`

		console.log(query)
		connection.query(query, function(err, results) {
			assert.ifError(err);
			console.log('gotten the data', results);
			res.render('movie', {
				movie: results[0]
			});
		});
	});

	app.get('/bookmovie/:id', function(req, res) {
		var query = `select * from movies where id = ${req.params.id}`
		console.log(query)
		connection.query(query, function(err, results) {
			assert.ifError(err);
			console.log('gotten the data', results);

			var query2 = `select * from users where id = ${req.params.id}`

			connection.query(query2, function(err, results2) {
				assert.ifError(err);
				console.log('gotten the data', results2);


				res.render('bookmovie', {
					movie: results[0],
					// bookmovielink: '/bookmovie/'+ results[0],
					user: results2[0]
				});
			});
		});
	});


	// app.route('/admin/adminlogin')
	// 	.get(function(req, res) {
	// 		res.render('admin/adminlogin');
	// 	})
	// 	.post(function(req, res) {
	// 		console.log(req.body)
	// 			//connect and query in users table for user data etc
	// 		var query = `select * from admin where username = "${req.body.username}" and password = "${req.body.password}"`;

	// 		console.log(query)
	// 		connection.query(query, function(err, results) {
	// 			assert.ifError(err);
	// 			console.log('gotten the data', results);
	// 			if (results[0]) {
	// 				res.redirect('index')
	// 				login: results[0]
	// 			} else {
	// 				console.log(results)
	// 				res.render('admin/adminlogin', {
	// 					err: "the err"
	// 				})
	// 			}
	// 		})
	// 	});

	// app.get('/admin/index', function(req, res) {
	// 	var query = 'select * from admin'
	// 	console.log(query)
	// 	connection.query(query, function(err, results) {
	// 		assert.ifError(err);
	// 		console.log('gotten the data', results);

	// 		var query2 = 'select * from bookings'
	// 		console.log(query)
	// 		connection.query(query, function(err, results2) {
	// 			assert.ifError(err);
	// 			console.log('gotten the data', results2);

	// 			var query3 = 'select * from users'
	// 			console.log(query)
	// 			connection.query(query, function(err, results3) {
	// 				assert.ifError(err);
	// 				console.log('gotten the data', results3);

	// 				res.render('admin/index', {
	// 					admin: results,
	// 					booking: results2,
	// 					user: results3
	// 				});
	// 			});
	// 		});
	// 	});
	// });

	// app.get('/admin/bookings', function(req, res) {
	// 	var query = 'select * from bookings'
	// 	console.log(query)
	// 	connection.query(query, function(err, results) {
	// 		assert.ifError(err);
	// 		console.log('gotten the data', results);
	// 		res.render('admin/bookings', {
	// 			booking: results
	// 		});
	// 	});
	// });

	// app.get('/admin/profile', function(req, res) {
	// 	var query = 'select * from users'
	// 	console.log(query)
	// 	connection.query(query, function(err, results) {
	// 		assert.ifError(err);
	// 		console.log('gotten the data', results);
	// 		res.render('admin/profile', {
	// 			userlist: results
	// 		});
	// 	});
	// });

	// app.route('/admin/movieslist')
	// 	.get(function(req, res) {
	// 		var query = 'select * from movies'

	// 		console.log(query)
	// 		connection.query(query, function(err, results) {
	// 			assert.ifError(err);
	// 			console.log('gotten the data', results);
	// 			res.render('admin/movieslist', {
	// 				movies: results
	// 			});
	// 		});
	// 	});

	// app.post('/admin/movieslist', function(req, res) {
	// 	console.log("received something", req.body)
	// 	req.body.movie_title = "movie"
	// 	req.body.imagepath = "test.jpg"
	// 	var query = 'insert into movies (' +
	// 		Object.keys(req.body).map((key) => {
	// 			return key
	// 		}) +
	// 		') values (' +
	// 		Object.keys(req.body).map((key) => {
	// 			return JSON.stringify(req.body[key])
	// 		}) + ')'

	// 	console.log(query)
	// 	connection.query(query, function(err, results) {
	// 		assert.ifError(err);
	// 		console.log('inserted the data', results);
	// 		if (results[0]) {
	// 				res.redirect('movieslist')
	// 				movie: results[0]
	// 			} else {
	// 				console.log(results)
	// 				res.render('admin/movieslist', {
	// 					err: "the err"
	// 				})
	// 			}
	// 	});
	// });

	// app.get('/admin/userlist', function(req, res) {
	// 	var query = 'select * from users'

	// 	console.log(query)
	// 	connection.query(query, function(err, results) {
	// 		assert.ifError(err);
	// 		console.log('gotten the data', results);
	// 		res.render('admin/userlist', {
	// 			userlist: results
	// 		});
	// 	});
	// });

	// app.route('/admin/editmovie')
	// 	.get(function(req, res) {
	// 		res.render('admin/editmovie');
	// 	})
	// 	.post(function(req, res) {
	// 		console.log("received something", req.body)
	// 		req.body.role = ""
	// 		req.body.imagepath = ""
	// 		var query = 'update movies (' +
	// 			Object.keys(req.body).map((key) => {
	// 				return key
	// 			}) +
	// 			') values (' +
	// 			Object.keys(req.body).map((key) => {
	// 				return JSON.stringify(req.body[key])
	// 			}) + ')'

	// 		console.log(query)
	// 		connection.query(query, function(err, results) {
	// 			assert.ifError(err);
	// 			console.log('inserted the data', results);
				
	// 		});
	// 	})

	// app.route('/admin/editusers')
	// 	.get(function(req, res) {
	// 		res.render('admin/editusers');
	// 	})
	// 	.post(function(req, res) {
	// 		console.log("received something", req.body)
	// 		req.body.role = "user"
	// 		req.body.imagepath = ""
	// 		var query = 'update users (' +
	// 			Object.keys(req.body).map((key) => {
	// 				return key
	// 			}) +
	// 			') values (' +
	// 			Object.keys(req.body).map((key) => {
	// 				return JSON.stringify(req.body[key])
	// 			}) + ')'

	// 		console.log(query)
	// 		connection.query(query, function(err, results) {
	// 			assert.ifError(err);
	// 			console.log('inserted the data', results);
	// 		});
	// 	})

	// app.route('/admin/logout')
	// 	.get(function(req, res) {
	// 		res.render('admin/logout');
	// 	});

	app.use(function(req, res) {
		res.type('text/html');
		res.status(404);
		res.render('404');
	});

	app.use(function(err, req, res, next) {
		console.error(err.stack);
		res.status(500);
		res.render('500');
	});

	app.listen(port, function() {
		console.log(`Your current project is running on http://localhost:${port}`);
	});

});