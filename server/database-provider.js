var Parse = require('parse').Parse
var Worker = require('./worker').Worker

// Constructor for a DatabaseProvider object
var DatabaseProvider = function(app, server) {
	// Parse assigned IDs
	var APP_ID = 'VUmeTixLxsOyRmBsi5kFbUSoajFrVYFU9vKfFJyy'
	var JAVASCRIPT_KEY = 'kq5k9XkvgPpH8Y2y7ZeiSjd4IyCDtmbNSBxqyvti'
	var MASTER_KEY = 'hXvZIYuOZud90bCPIBkvsKMILIgy59rzvgRJ4ZD4'

	// Begin accepting connection on app port
	server.listen(app.get('port'), function() {
		console.log('[+] App is deployed on port ' + app.get('port'));
	})

	// Initialize database with Parse keys
	console.log('[+] Connecting to Parse database.')
	Parse.initialize(APP_ID, JAVASCRIPT_KEY, MASTER_KEY)

    ////////////////// DEBUG ///////////////////////
	// Check database for a test response
	// If a response is recieved, the database connected successfully 
	console.log('[~] Checking database for a test response.')
	// Create a new Parse object of type TestObject
	var TestObject = Parse.Object.extend('TestObject')
	// Create a query that searches Parse for a TestObject
	var query = new Parse.Query(TestObject)
	// Look for { foo: 'test' } in the TestObject
	query.equalTo('foo', 'test')
	query.find({
	  success: function(res) {
	    console.log('[+] Successfully retrieved test object.')
	  },
	  error: function(err) {
	   //  console.log('[-] Error retrieving test response: Error: ' + 
				// err.code + ' ' + err.message)
	  }
	})
}


// This function attempts to reset a Parse user password with the given email.
// A callback with an error from parse is provided.
DatabaseProvider.prototype.resetPassword = function(email, callback) {
	Parse.User.requestPasswordReset(email, {
  		success: function() {
    		// Password reset request was successful
    		console.log('[~] Reset Request sent')
    		callback(null)
 		 },
  		error: function(err) {
  			// Send error message back to calling function
    		console.log('[~] Reset Request Failed')
    		callback(err)
 		 }
	})
}

// Allow all functions in DatabaseProvider to be accesed outside file scope
// if this file is required
exports.DatabaseProvider = DatabaseProvider
