var Parse = require('parse').Parse

// Constructor for worker
var Worker = function(name, email, username, password) {

    var user = new Parse.User() // Create a new Parse user 
     
	// Set user object fields
	user.set('username', username)
	user.set('password', password)
	user.set('email', email)
	user.set('name', name)

    return user
}

// Allow all the functions in this file to be accessed 
// when this file is required 
module.exports.Worker = Worker 






