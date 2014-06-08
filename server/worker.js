var Parse = require('parse').Parse
var Company = require('./company').Company
var Calendar = require('./calendar').Calendar

// Constructor for worker
var Worker = Parse.User.extend({
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function retrieves company that the current is related to
  retrieveCompany: function(callback) 
  {
    var currentUserCompany = this.get('company')

    currentUserCompany.fetch({
      success: function(returnedCompany)
      {
        callback(null, returnedCompany)
      }, // end of success, fetching company

      error: function(error)
      {
        console.error('Failed company retrieval in worker.js.')
        callback(error) // error occurred when getting related company from worker
      } // end of error()
    }) // end of company fetch()
  },

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
  // This function gets the current Parse user
  retrieveCurrentWorker: function(callback) 
  {
    var userQuery = new Parse.Query(Parse.User)
    userQuery.equalTo('objectId', this.id)

    userQuery.first({
      success: function(user) 
      {
        var currentUser = {
          "id" : user.id,
          "employeeName" : user.get('name'),
          "email" : user.get('email'),
          "phoneNumber" : user.get('phoneNumber'),
          "currentPassword" : "", 
          "newPassword" : ""
        }
        // console.log(JSON.stringify(currentUser))
        callback(null, currentUser)
      },

      error: function(err)
      {
        callback(err)
      }
    })
  },

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
  // This function decides whether the current worker is manager or not
  isManager: function() {
    return this.get('assignedRole') === 'Manager'
  },

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
  retrieveAllEmployeesAtCompany: function(callback) 
  {
    // Array to return
    var allEmployees = []
    // Give current user full access for Parse query
    Parse.Cloud.useMasterKey()

    // Find company of current logged in user
    this.retrieveCompany(function(error, fetchedCompany) 
    {
      if(error) {
        callback(error) 
      } else {
        var userQuery = new Parse.Query(Parse.User)
        userQuery.equalTo('company', fetchedCompany)

        // Find all Workers that have the same company id
        userQuery.find({
          success: function(queredUsers) 
          {
            // Loop through returned users and add each name to the array
            for(var i = 0; i < queredUsers.length; ++i) {
              var userName = queredUsers[i].get('name')
              var phoneNumber = queredUsers[i].get('phoneNumber')
              var role = queredUsers[i].get('assignedRole')
              var email = queredUsers[i].get('email')
              var id = queredUsers[i].id

              // Construct JSON object and add to array
              employeeInfo = {
                "id" : id,
                "username" : userName,
                "phonenumber" : phoneNumber,
                "role" : role,
                "email" : email
              }

              // console.log(JSON.stringify(employeeInfo))
              allEmployees.push(employeeInfo)
            }
            callback(null, allEmployees)
          },

          error: function(err)
          {
            console.log('Error getting users: ' + err.message)
            callback(err)
          }
        }) // end of find()
      }
    }) // end of retrieveCompany()
  }, // end of retrieveAllEmployeesAtCompany()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  initialManagerInformationCreation: function(newUserInformation, callback)
  {
    // Retireved JSON:
    // { "company_info": { "company_name":, "company_phone":}, "employees": }
    
    // allow master key if manager logs in
    if(this.get('assignedRole') === 'Manager') {
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

    // Set the manager company name and company phone number
    // A filled in company name is checked for on the front end
    this.retrieveCompany(function(error, fetchedCompany)
    {
      if(error) {
        callback(error)
      } else {
        fetchedCompany.update(companyInfo, callback)
      }
    })

  }, // end of initialManagerInformationCreation

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  logoutCurrentUser: function()
  {
    Parse.User.logOut() // logout current user
  },

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function retrieves calendars based off the Company pointer 
  // and also retrieves the company information 
  retrieveCalendar: function(callback)
  {
    this.retrieveCompany(function(error, returnedCompany)
    {
      if(error) {
        callback(error) 
      } else {
        // getting array of pointers to calendars from company
        var calendars = returnedCompany.get('calendars') 

        calendars.fetch({
          success: function(returnedCalendar)
          {
            console.log('im here in the success of retrieve calendar')
            callback(null, returnedCalendar, returnedCompany.get('companyInfo'))
          },

          error: function(error) 
          {
            callback(error) 
          }
        }) // end of calendars fetch()
      }
    }) // end of retrieveCompany()
  }, // end of retrieveCalendar()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function update array calendars to the database
  updateCalendar: function(clientCalendars, callback)
  {
    // retrieve calendar
    this.retrieveCalendar(function(error, companyCalendars)
    {
      if(error) { // if there was error while retrieving calendars
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
  }, // end of create()

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  delete: function(username)
  {
    // allow master key if manager logs in
    if(this.get('assignedRole') === 'Manager') {
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
        // allow master key if manager logs in

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
  // This function retrieves company that the current is related to
  updateEmployeeInformation: function(employees, callback) 
  {
    // employeeInfo = { "id": , employeeName" : , 
    //                  "email" : emailToChange, 
    //                  "phoneNumber" : phoneNumber, "currentPassword" : "", 
    //                  "newPassword" : "" }

    Parse.Cloud.useMasterKey()

    // console.log('Hello: ' + JSON.stringify(employees[i]))
    var userQuery = new Parse.Query(Parse.User)

    userQuery.equalTo('company', Worker.current().get('company'))

    userQuery.find({
      success: function(userList)
      {
        console.log('im here')
        for(var i = 0; i < employees.length; ++i) {

          for(var j = 0; j < userList.length; ++j) {
            // Search for user information to change
            var userID = userList[j].id

            if(userID === employees[i].id) {
              // Check if the employee name needs to be changed
              if(employees[i].employeeName !== '') {
                userList[j].set('name', employees[i].employeeName)
              }
              // Check if the employee email needs to be changed
              if(employees[i].email !== '') {
                userList[j].set('username', employees[i].email)
                userList[j].set('email', employees[i].email)
              }
              // Check if the employee password needs to be changed
              if(employees[i].currentPassword !== '') {
                // Use new password to update
                if(user.get('password') === employees[i].currentPassword) {
                  userList[j].set('password', employees[i].newPassword)
                }
              }
              // Check if the employee phone number needs to be changed
              if(employees[i].phoneNumber !== '') {
                userList[j].set('phoneNumber', employees[i].phoneNumber)
              }

              // Save changes
              userList[j].save(null, {
                success: function(savedUser) {
                  console.log('Updated object with objectId: ' + savedUser.id)
                  callback(null)

                },
                error: function(savedUser, err) {
                  console.log('Failed updating object: ' + err.description)
                  callback(err)
                }
              })
            }
          }
          if(i == employees.length-1)
            console.log('im here at the end of the for loop')
        }
      }, 

      error: function(err)
      {
        // error occurred when querying the role object
        console.error("[~] Error: " + err.code + error.message)
      }
    })
  },

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function attempts to reset a Parse user password with the given email.
  // A callback with an error from parse is provided.
  resetPassword: function(email, callback)
  {
    Parse.User.requestPasswordReset(email, {
      success: function()
      {
        // Password reset request was successful
        console.log('[~] Request sent to: ' + Worker.current().get('username'))
        callback(null)
      },

      error: function(err)
      {
        // Send error message back to calling function
        console.error('[~] Reset request failed')
        callback(err)
      }
    })
  } // end of resetPassword()
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
