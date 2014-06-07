var Parse = require('parse').Parse

// Constructor for a DatabaseProvider object
module.exports = function(app, server, callback)
{
	// Parse assigned IDs
	var APP_ID = 'VUmeTixLxsOyRmBsi5kFbUSoajFrVYFU9vKfFJyy'
	var JAVASCRIPT_KEY = 'kq5k9XkvgPpH8Y2y7ZeiSjd4IyCDtmbNSBxqyvti'
	var MASTER_KEY = 'hXvZIYuOZud90bCPIBkvsKMILIgy59rzvgRJ4ZD4'

	// Begin accepting connection on app port
	server.listen(app.get('port'), function()
  {
		console.log('[+] App is deployed on port ' + app.get('port'));
	})

	// Initialize database with Parse keys after waiting 1 second
	console.log('[~] Connecting to Parse database.')
	Parse.initialize(APP_ID, JAVASCRIPT_KEY, MASTER_KEY)
	callback(null)
}
