var Parse = require('parse').Parse
var Company = require('./company').Company

// Constructor for worker
var Worker = Parse.User.extend({
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

  delete: function() {
  }
}, {
  // ***************** ************* ***************** // 
  // ***************** Class methods ***************** // 
  // ***************** ************* ***************** // 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function takes in a name, email, username, and password and attempts
  // to create a new user in Parse. A callback function is also included to 
  // alert the caller of the user creation status
  create: function(userInfo, callback) {
    // Store data locally to pass into databaseProvider 
    var worker = new Worker()

    var name = userInfo.name === '' ? null : userInfo.name
    var email = userInfo.email === '' ? null : userInfo.email
    var password = userInfo.password === '' ? null : userInfo.password
    var assignedRole = userInfo.assignedRole === '' ? null : userInfo.assignedRole
    var phoneNumber = userInfo.phoneNumber === '' ? null : userInfo.phoneNumber

    var isOnSignUp = userInfo.isOnSignUp === '' ? null : userInfo.isOnSignUp

    // Set user object fields
    worker.set('username', email)
    worker.set('password', password)
    worker.set('email', email)
    worker.set('name', name)

    worker.set('phoneNumber', phoneNumber)
    
    var company 

    // set up company and save the worker
    if(!isOnSignUp) { // if it is not on sign up
      company = Worker.current().get('company') // get pointer to current manager's company
      company.fetch({ // fetch current manager's company
        success: function(fetchedCompany) {
          company = fetchedCompany
        }, 
        error: function(error) {
          console.error('No such company can\'t be found')       
        }
      }) 

      worker.set('company', company)

      worker.save(null, {
        success: function() {
          console.log('saved new user')  
          setRole(worker, assignedRole) // set role for the worker
          callback(null)
        },

        error: function(error) {
          console.log('couldn\'t save new user')  
          callback(error)
        }
      }) // save worker as employee

    } else { // if it is on sign up
      // if the company is set correctly
      // Sign up the worker in parse
      worker.signUp(null, {

        success: function(user) {
          console.log('[+] Successfully created new user ' + name)

          setRole(worker, assignedRole) // set role for the worker
         
          // create a new company with the given company name
          company = Company.create(userInfo.companyName, 
            function() {
            
              worker.set('company', company) // set the company for the worker 
              worker.save(null, {
                success: function() {
                  console.log('New attributes have been saved to the new worker')
                }, // end of success() for setting up company
                
                error: function() {
                  console.log('Could not save new attributes to the new worker')
                }
              }) // end of worker.save()

          }) // create the company 
          
          callback(null, user) // callback to the UI
        }, 
            
        error: function(user, err) {
          console.log('[~] Error: ' + err.code + ' ' + err.message)
          callback(err.code, user)
        } 
      }) // end of signUp
    }  

    return worker
  }, // end of create()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function checks Parse to see if the (user, password) pair is valid. A 
  // callback function is also included to alert the caller if the pair is valid
  // or not
  verifyLogin: function(loginInfo, callback) {
    var user = loginInfo.user === '' ? null : loginInfo.user
    var password = loginInfo.password === '' ? null :  loginInfo.password

    // Check Parse for the given username and password
    Worker.logIn(user, password, {
        success: function(user) {
          console.log('[~] Successful login.')


          callback(null, user)
        },

        error: function(user, err) {
          console.error('[~] Unsuccessful login. Error: ' + JSON.stringify(err))
          callback(err.code, user)
        }
    })
  }, // end of verifyLogin()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function attempts to reset a Parse user password with the given email.
  // A callback with an error from parse is provided.
  resetPassword: function(email, callback) {
    Parse.User.requestPasswordReset(email, {
        success: function() {
          // Password reset request was successful
          console.log('[~] Reset request sent')
          callback(null)
       },

        error: function(err) {
          // Send error message back to calling function
          console.error('[~] Reset request failed')
          callback(err)
       }
    })
  }, // end of resetPassword()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  delete: function(username) {
    var users = new Parse.Query(Parse.User)
    users.equalTo('username', username)
    
    users.first({
      
      success: function(userToBeDeleted) {

        // allow master key if manager logs in
        //if(user.get('assignedRole') === 'Manager')
         // Parse.Cloud.useMasterKey

        if(userToBeDeleted === undefined)
          console.log('no such user found')
        else
          userToBeDeleted.destroy({
            success: function(object) {
              console.log('the user was successfully delete') 
            },

            fail: function(object, error) {
              // error message for deleting a user    
              console.error('the user could not be deleted')
            }
          }) // end of destroy()

        //console.log('deleted ' + username)            
      }, // success

      error: function(error) {
        console.error('could not find the user to delete'); 
      } // error
    })
  }, // end of delete()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  login: function(username, userPassword) {
      Parse.User.logIn(username, userPassword, {
        succuess: function(user) {
          console.log('username is successfully logged in')
        }, 
        error: function(user, error) {
          console.error('login is failed')       
        }
      })
  } // end of login()
})

function setRole(worker, assignedRole) {
  // Giving the new user the role of Manager or Employee
  var roleQuery = new Parse.Query(Parse.Role)
  roleQuery.equalTo('name', assignedRole)

  // get the manger role
  roleQuery.first({

    success: function(role) {
      // successfully retrieved the object role          
      role.getUsers().add(worker) // add worker 
      role.save()
    }, 

    error: function(err) {
      // error occurred when querying the role object
      console.error("[~] Error: " + err.code + error.message + " Role not found")
    }
  })
}

// Allow all the functions in this file to be accessed 
// when this file is required 
module.exports.Worker = Worker 
