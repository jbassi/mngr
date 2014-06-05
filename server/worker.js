var Parse = require('parse').Parse
var Company = require('./company').Company
var Calendar = require('./calendar').Calendar

// Constructor for worker
var Worker = Parse.User.extend({
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

  // This function retrieves array calendars based off the Company pointer 
  retrieveCalendar: function(callback)
  {
    var currentUserCompany = this.get('company')

    currentUserCompany.fetch({
      success: function(returnedCompany)
      {
        var returnedCalendar

        // getting array of pointers to calendars from company
        var calendars = returnedCompany.get('calendars') 
        console.log('before the calendars fetch')

        calendars.fetch({
          success: function(returnedCalendar)
          {
            console.log('im here in the success of retrieve calendar')
            callback(null, returnedCalendar, returnedCompany.get('positions'))
          },

          error: function(error) 
          {
            callback(error) 
          }
        })
        
        /*
        // get array of calendars objects from array of calendars pointers
        getCalendars(calendars, returnedCalendar, function(error)
        {
          // send array of calendars to front-end using callback
          if(error) {
            callback(error) // error occurred when getting all calendars
          }
          else {
            // get array of positions 
            var positions = returnedCompany.get('positions')
            // send all calendars to client and positions to the client
            callback(null, returnedCalendar, positions)
          }
        })
        */
      }, // end of success, fetching company

      error: function(error)
      {
        console.error('Failed company retrieval in worker.js.')
        callback(error) // error occurred when getting related company from worker
      } // end of error()

    }) // end of company fetch()
  }, // end of retrieveCalendar()

  // This function update array calendars to the database
  updateCalendar: function(clientCalendars, callback)
  {
    // retrieve calendar
    this.retrieveCalendar(function(error, companyCalendars)
    {
      console.log('im here in the retrieve calendar callback')
      if(error) { // if there was error while retrieving calendars
        console.log('im here in the update calendar error')      
        callback(error) 

      } else {

        // update the companyCalendars
        companyCalendars.set('Days', clientCalendars.days)
        companyCalendars.set('Availabilities', 
                                clientCalendars.availabilities)

        companyCalendars.save(null, { 
          success: function()
          {
            console.log('updated the calendars successfully')       
            callback(null)
          }, 
          
          error: function(error)
          {
            console.error('could not update the calendars')       
            callback(error)
          }

        }) // end of save()
      }
    }) // end of retrieveCalendar()
  } // end of updateCalendar()

}, {
  // ***************** ************* ***************** // 
  // ***************** Class methods ***************** // 
  // ***************** ************* ***************** // 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function takes in a name, email, username, and password and attempts
  // to create a new user in Parse. A callback function is also included to 
  // alert the caller of the user creation status
  create: function(userInfo, callback)
  {
    // Store data locally to pass into databaseProvider 
    var worker = new Worker()

    var name = userInfo.name === '' ? null : userInfo.name
    var email = userInfo.email === '' ? null : userInfo.email
    var password = userInfo.password === '' ? null : userInfo.password
    var assignedRole = userInfo.assignedRole === '' ? null : userInfo.assignedRole
    var phoneNumber = userInfo.phoneNumber === '' ? null : userInfo.phoneNumber
    var isOnSignUp = userInfo.isOnSignUp === '' ? null : userInfo.isOnSignUp
    var company 

    // Set worker object fields
    worker.set('username', email)
    worker.set('password', password)
    worker.set('email', email)
    worker.set('name', name)
    worker.set('assignedRole', assignedRole)

    worker.set('phoneNumber', phoneNumber)
    
    // set up company and save the worker
    if(!isOnSignUp) { // if it is not on sign up
      company = Worker.current().get('company') // get pointer to current manager's company
      company.fetch({ // fetch current manager's company
        success: function(fetchedCompany)
        {
          company = fetchedCompany
        }, 

        error: function(error)
        {
          console.error('No such company can\'t be found')       
        }
      }) 

      worker.set('company', company)

      worker.save(null, {
        success: function()
        {
          console.log('saved new user')  
          setRole(worker, assignedRole) // set role for the worker
          callback(null, worker) 
        },

        error: function(user, error)
        {
          console.error(error.message)  
          callback(error)
        }
      }) // save worker as employee

    } else { // if it is on sign up
      // if the company is set correctly
      // Sign up the worker in parse
      worker.signUp(null, {

        success: function(user)
        {
          console.log('[+] Successfully created new user ' + name)

          setRole(worker, assignedRole) // set role for the worker
         
          // create a new company with the given company name
          company = Company.create(userInfo.companyName, function(error)
          {
              if(error) { // if there was problem creating a new company
                console.error('Could not create a new company') 

              } else { // if there was no error when creating a new company 
                worker.set('company', company) // set the company for the worker 
                worker.save(null, {
                  success: function()
                  {
                    console.log('New attributes have been saved to the new worker')
                  }, // end of success() for setting up company
                  
                  error: function()
                  {
                    console.error('Could not save new attributes to the new worker')
                  }
                }) // end of worker.save()

                callback(null, user) // callback to the UI
              } // end for checking error 
          }) // create the company 
        }, // end success for signUp
            
        error: function(user, err)
        {
          console.error('[~] Error: ' + err.code + ' ' + err.message)
          callback(err)
        } 
      }) // end of signUp
    }  

    return worker
  }, // end of create()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function checks Parse to see if the (user, password) pair is valid. A 
  // callback function is also included to alert the caller if the pair is valid
  // or not
  verifyLogin: function(loginInfo, callback)
  {
    var user = loginInfo.user === '' ? null : loginInfo.user
    var password = loginInfo.password === '' ? null :  loginInfo.password

    // Check Parse for the given username and password
    Worker.logIn(user, password, {
        success: function(user)
        {
          console.log('[~] Successful login.')


          callback(null, user)
        },

        error: function(user, err)
        {
          console.error('[~] Unsuccessful login. Error: ' + JSON.stringify(err))
          console.error(err)
          //callback(err.code, user)
          callback(err, user)
        }
    })
  }, // end of verifyLogin()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function attempts to reset a Parse user password with the given email.
  // A callback with an error from parse is provided.
  resetPassword: function(args, callback)
  {
    Parse.User.requestPasswordReset(args.email, {
        success: function()
        {
          // Password reset request was successful
          console.log('[~] Reset request sent')
          callback(null)
        },

        error: function(err)
        {
          // Send error message back to calling function
          console.error('[~] Reset request failed')
          callback(err)
        }
    })
  }, // end of resetPassword()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  delete: function(username)
  {
    // allow master key if manager logs in
    if(Worker.current().get('assignedRole') === 'Manager') {
      Parse.Cloud.useMasterKey()
    }

    var users = new Parse.Query(Parse.User)
    users.equalTo('username', username)
    
    users.first({
      success: function(userToBeDeleted)
      {
        if(userToBeDeleted === undefined)
          console.log('no such user found')

        else
          userToBeDeleted.destroy({
            success: function(object)
            {
              console.log('the user was successfully delete') 
            },

            fail: function(object, error)
            {
              // error message for deleting a user    
              console.error('the user could not be deleted')
            }
          }) // end of destroy()
        //console.log('deleted ' + username)            
      }, // success

      error: function(error)
      {
        console.error('could not find the user to delete'); 
      } // error
    })
    
  }, // end of delete()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  login: function(username, userPassword)
  {
      Parse.User.logIn(username, userPassword, {
        succuess: function(user)
        {
          console.log('username is successfully logged in')
        }, 

        error: function(user, error)
        {
          console.error('login is failed')       
        }
      })
  }, // end of login()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
  retrieveAllEmployeesAtCompany: function(callback) 
  {
    var currentUser = Worker.current()
    // Array to return
    var allEmployees = []
    // Give current user full access for Parse query
    Parse.Cloud.useMasterKey()

    // Find company of current logged in user
    currentUser.get('company').fetch({
      success: function(fetchedCompany)
      {
        var userQuery = new Parse.Query(Parse.User)
        userQuery.equalTo('company', fetchedCompany)
        // Find all Workers that have the same company id
        userQuery.find({
          success: function(queredUsers) 
          {
            // Loop through returned users and add each name to the array
            for(var i = 0; i < queredUsers.length; ++i) {
              var userName = queredUsers[i].get('name')
              allEmployees.push(userName)
            }
            callback(null, allEmployees)
          },
          error: function(err)
          {
            console.log('Error getting users: ' + err.message)
            callback(err)
          }
        })
      },

      error: function(err)
      {
        console.log('Error getting company: ' + err.message)
        callback(err)
      }
    })

  }, // end of retrieveAllEmployeesAtCompany()

  initialManagerInformationCreation: function(newUserInformation, callback)
  {
    // Retireved JSON:
    // { "company_info": { "company_name":, "company_phone":}, "employees": }
    
    var currentUser = Worker.current()

    // allow master key if manager logs in
    if(currentUser.get('assignedRole') === 'Manager') {
      Parse.Cloud.useMasterKey()
    } else {
      callback({
        "message" : "You are not manager"
      })
    }

    // get the company info of the newUserInformation JSON
    var companyInfo = newUserInformation.companyInfo
    // get the array of employees from newUserInformation
    var employeesToAdd = newUserInformation.employees
    
    // Set the manager company name and company phone number
    // A filled in company name is checked for on the front end
    currentUser.get('company').fetch({ // fetch current manager's company
      success: function(fetchedCompany)
      {
        fetchedCompany.set('name', companyInfo.name)
        fetchedCompany.set('phoneNumber', companyInfo.phone)
        fetchedCompany.save({
          success: function()
          {
            console.log('Company information save successful.')
            // Loop through the array of employees and create new employees
            for(var i = 0; i < employeesToAdd.length; ++i) {
              /* { "name":, "email":, "password":, "assignedRole":, 
                   "phoneNumber":, "isOnSignUp": } */
              // each employeeToAdd item is a JSON object
              Worker.create(employeesToAdd[i], function(err) {
                if(err) {
                  // An error occured adding workers, make the front end display
                  // an error message and stop trying to add users
                  callback(err)
                }
              }) // end of Worker.create()
            }
          },

          error: function(error)
          {

            console.error('Company information save failed.')
            callback(err)
          }
        }) // end of fetchedCompany.save()
      }, 

      error: function(error)
      {
        console.error('No such company can\'t be found')       
      }
    }) // end of company.fetch()
  }, // end of initialManagerInformationCreation

  logoutCurrentUser: function()
  {
    var currentUser = Worker.current()
    currentUser.logOut()
  }
}) // end of class definition

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// @@@@@@@@@@@@@@@@@@@@@@ Helper Functions @@@@@@@@@@@@@@@@@@@@@ // 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// helper function for creating new worker
function setRole(worker, assignedRole)
{
  // Giving the new user the role of Manager or Employee
  var roleQuery = new Parse.Query(Parse.Role)
  roleQuery.equalTo('name', assignedRole)

  // get the manger role
  roleQuery.first({
    success: function(role)
    {
      // successfully retrieved the object role          
      role.getUsers().add(worker) // add worker 
      role.save()
    }, 

    error: function(err)
    {
      // error occurred when querying the role object
      console.error("[~] Error: " + err.code + error.message + " Role not found")
    }
  })
} // end of setRole

// helper function for retrieving calendars from worker's company
function getCalendars(calendars, returnedCalendar, callback)
{
  var calendarQuery = new Parse.Query('Calendar')

  // loop through the array of pointers to calendars to get calendar objects
  calendarQuery.get(calendars, {
    success: function(returnedCalendar)
    {
      returnedCalendar = returnedCalendar // push all the calendars objects to array
      callback(null)
    },

    error: function(error)
    { 
      console.log('Failed calendar retrieval in worker.js.')
      callback(error) // if error occurred during getting the calendar
    } 
  }) // end of get() for calendars
} // end of getCalendars()

// Allow all the functions in this file to be accessed 
// when this file is required 
module.exports.Worker = Worker 
