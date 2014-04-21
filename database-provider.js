var Parse = require('parse').Parse

var DatabaseProvider = function(app, server) {
	// Parse IDs
	var APP_ID = 'VUmeTixLxsOyRmBsi5kFbUSoajFrVYFU9vKfFJyy'
	var JAVASCRIPT_KEY = 'kq5k9XkvgPpH8Y2y7ZeiSjd4IyCDtmbNSBxqyvti'
	var MASTER_KEY = 'hXvZIYuOZud90bCPIBkvsKMILIgy59rzvgRJ4ZD4'

	// Lanuch server on port
	server.listen(app.get('port'), function() {
		console.log('[+] App is deployed on port ' + app.get('port'));
	})

	// Initialize database with Parse keys
	console.log('[+] Connecting to Parse database.')
	Parse.initialize(APP_ID, JAVASCRIPT_KEY, MASTER_KEY)

	// Check database for a test response
	console.log('[~] Checking database for a test response.')
	var TestObject = Parse.Object.extend('GameScore')
	var query = new Parse.Query(TestObject)
	query.equalTo('foo', 'test')
	query.find({
	  success: function(results) {
	    console.log('[+] Successfully retrieved test object.')
	  },
	  error: function(error) {
	    console.log('[-] Error retrieving test response: Error: ' + error.code + ' ' + error.message)
	  }
	})
}

DatabaseProvider.prototype.createUser = function(name, email, username, password, callback) {
	// Create a new Parse user to add to the database
	var newUser = new Parse.User()

	// Can add more object fields later
	newUser.set('username', username)
	newUser.set('password', password)
	newUser.set('email', email)
	newUser.set('name', name)

	// Sign up new user
	newUser.signUp(null, {
	  success: function(user) {
	  	console.log('[+] Successfully created new user ' + name)
	  	callback(null, user)
	    // Hooray! Let them use the app now
	  },
	  error: function(user, err) {
	    // Show the error message somewhere and let the user try again.
	    console.log('[~] Error: ' + err.code + ' ' + err.message)
	    callback(err, user)
	  }
	})
}

DatabaseProvider.prototype.verifyLogin = function(user, password, callback) {
	// Checks Parse for a vaid user
	Parse.User.logIn(user, password, {
		success: function(user) {
			// Do successful login stuff
			console.log('[~] Successful login.')
			callback(null, user)
		},
		error: function(user, err) {
			// Failed login
			console.log('[~] Unsuccessful login. Error message: ' + err)
			callback(err, user)
		}
	})
}

exports.DatabaseProvider = DatabaseProvider