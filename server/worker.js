var Parse = require('parse').Parse

// Constructor for worker
var Worker = Parse.User.extend({
  // Instance methods
  createUser:  function(name, email, username, password, callback) {
    // Set user object fields
    this.set('username', username)
    this.set('password', password)
    this.set('email', email)
    this.set('name', name)

    // Sign up the worker
    this.signUp(null, {
      success: function(user) {
        console.log('[+] Successfully created new user ' + name)
        callback(null, user)
      },
      error: function(user, err) {
        console.log('[~] Error: ' + err.code + ' ' + err.message)
        callback(err, user)
      }
    })
  } // end of createUser

}, {
  // Class methods

  // This function checks Parse to see if the (user, password) pair is valid. A 
  // callback function is also included to alert the caller if the pair is valid
  // or not
  verifyLogin: function(user, password, callback) {
    // Check Parse for the given username and password
    Worker.logIn(user, password, {
        success: function(user) {
          console.log('[~] Successful login.')
          callback(null, user)
        },
        error: function(user, err) {
          console.log('[~] Unsuccessful login. Error: ' + JSON.stringify(err, true))
          callback(err.code, user)
        }
    })
  } // end of verifyLogin

})

// This function takes in a name, email, username, and password and attempts
// to create a new user in Parse. A callback function is also included to alert
// the caller of the user creation status


// Allow all the functions in this file to be accessed 
// when this file is required 
module.exports.Worker = Worker 






