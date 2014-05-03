var Parse = require('parse').Parse

// Constructor for worker
var Worker = Parse.User.extend({
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

  // This function takes in a name, email, username, and password and attempts
  // to create a new user in Parse. A callback function is also included to 
  // alert the caller of the user creation status
  
  createUser:  function(args, callback) {
    // Store data locally to pass into databaseProvider 
    var name = args[0] === '' ? null : args[0]
    var email = args[1] === '' ? null : args[1]
    var password = args[2] === '' ? null : args[2]
    var role = args[3] === '' ? null : args[3]

    // Set user object fields
    this.set('username', email)
    this.set('password', password)
    this.set('email', email)
    this.set('name', name)

    // Sign up the worker
    this.signUp(null, {
      success: function(user) {
        console.log('[+] Successfully created new user ' + name)

        // Giving the new user the role of Manager or Employee
        var roleQuery = new Parse.Query(Parse.Role)
        roleQuery.equalTo('name', role)

        // get the manger role
        roleQuery.first({
          success: function(role) {
            // successfully retrieved the object role          
            role.getUsers().add(Parse.User.current())
            role.save()
          }, 
          error: function(error) {
            // error occurred when querying the role object
            console.error("[~] Error: " + error.code + error.message)
          }
        })

        callback(null, user)
      },
      error: function(user, err) {
        console.log('[~] Error: ' + err.code + ' ' + err.message)
        callback(err, user)
      }
    })
   

    //workerRole.getUsers().add(this)
  } // end of createUser

}, {
  // ***************** ************* ***************** // 
  // ***************** Class methods ***************** // 
  // ***************** ************* ***************** // 

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
          console.log('[~] Unsuccessful login. Error: ' + JSON.stringify(err))
          callback(err.code, user)
        }
    })
  }, // end of verifyLogin

  // This function attempts to reset a Parse user password with the given email.
  // A callback with an error from parse is provided.
  resetPassword: function(email, callback) {
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
})

// Allow all the functions in this file to be accessed 
// when this file is required 
module.exports.Worker = Worker 
