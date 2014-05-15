var Parse = require('parse').Parse
var Company = require('./company').Company

// Constructor for worker
var Worker = Parse.User.extend({
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

  // This function retrieves a calendar based off the Company name
  retrieveCalendar: function(callback) {
    var currentUserCompany = this.get('company')
    // console.log('ID: ' + JSON.stringify(currentUserCompanyID.objectId))
    // console.log('ID: ' + currentUserCompanyID)

    currentUserCompany.fetch({

      success: function(company) {

        console.log(JSON.stringify(company))
        callback(company.get('calendars'))
        
 

      }
    })
    // console.log('ID: ' + JSON.stringify(currentUserCompanyID['objectId']))

    // var companyQuery = new Parse.Query('Company')
    // companyQuery.get('rCZ39v1q66', {
    //   success: function(company) {
    //     console.log(JSON.stringify(company))
    //   },
    //   error: function(object, error) {
    //     console.log('Could not find company.')
    //   }
    // })

    // console.log(JSON.stringify(currentUserCompany))
    // var currentUserCalendar = currentUserCompany.get('calendar')
    // callback(currentUserCalendar)
    // callback(null)
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

    // When sign-up, create a new company
    if(isOnSignUp == true) {
      var companyName = userInfo.companyName  === '' ? null : userInfo.companyName
      var company = Company.create(companyName)
      worker.set('company', company) 
    } else { // If not sign-up, get manager's company
      // TODO: get manager(current user perhaps)'s company and set it to the new user
      //var company =  
    }

    // Sign up the worker in parse
    worker.signUp(null, {
      success: function(user) {
        console.log('[+] Successfully created new user ' + name)

        // Giving the new user the role of Manager or Employee
        var roleQuery = new Parse.Query(Parse.Role)
        roleQuery.equalTo('name', assignedRole)

        // get the manger role
        roleQuery.first({
          success: function(role) {
            // successfully retrieved the object role          
            role.getUsers().add(Parse.User.current()) // add new manager
            role.save()
          }, 

          error: function(err) {
            // error occurred when querying the role object
            console.error("[~] Error: " + err.code + error.message)
          }
        })

        callback(null, user)
      }, 

      error: function(user, err) {
        console.log('[~] Error: ' + err.code + ' ' + err.message)
        callback(err.code, user)
      } 
    }) // end of signUp

    return worker
  }, // end of create

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
  }, // end of verifyLogin

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
  } // end of resetPassword
})

// Allow all the functions in this file to be accessed 
// when this file is required 
module.exports.Worker = Worker 
