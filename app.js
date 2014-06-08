// Require module dependencies and create the app server.
var express = require('express')
var app = express()
var http = require('http')
var path = require('path')
var server = http.createServer(app)
var io = require('socket.io').listen(server)
var Worker = require('./server/worker').Worker
var Calendar = require('./server/calendar').Calendar
var Company = require('./server/company').Company

var Parse = require('parse').Parse

// Configure app settings 
app.configure(function()
{
    app.set('port', process.env.PORT || 3000)
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'jade')
    // app.use(express.favicon())
    app.use(express.logger('dev'))
    app.use(express.json())
    app.use(express.urlencoded())
    app.use(express.methodOverride())
    app.use(app.router)
    app.use(express.static(path.join(__dirname, 'public')))
})

// Set the console log level
io.set('log level', 1)

// Development specific items go here
if ('development' == app.get('env')) {
  app.use(express.errorHandler())
}

// Configure page routes -- this is equivalent to:
// var req = require('./routes/router.js')
// req(app)
require('./routes/router.js')(app)

// Create a databaseProvider object that links to the Parse database
require('./server/database-provider')(app, server, function(err)
{
  if(!err) {
    // No errors connecting to Parse, continue with app functionality 
    console.log('[+] Successfully connected to Parse.')   
  }

})

// ********************** ****************** ********************** //
// ********************** Socket Connections ********************** //
// ********************** ****************** ********************** //

// Configure socket.io server emits and on messages
io.sockets.on('connection', function(socket)
{
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Emit a successful connection message if socket.io connects
  socket.emit('status', {msg:'connection established'})

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempts to create a new Parse user by passing socket.io args array 
  // data to databaseProvider
  socket.on('sign-up', function(userInfo)
  {
    console.log('[~] Attempting to create user ' + userInfo.name + '.')

    Worker.create(userInfo, function(err, user)
    {
      // Check if the user was successfully added 
      // err is null if there is not an error 
      if(err) {
        socket.emit('sign-up-response', err)
        // TODO: handle error messages
      } else {
        // Emit user created with response message from databaseProvider
        socket.emit('sign-up-response', null, user)
      }
    })

  }) // end of sign-up

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Checks Parse for valid login and password passed in via the args array
  socket.on('login', function(args)
  {
    //app.databaseProvider.verifyLogin(user, password, function(err, res) {
    Worker.verifyLogin(args, function(err, user)
    {
      // Emit result of verifyLogin
      // err is null if there is not an error 
      if(err) {
        socket.emit('login-response', err)
      } else {
        var worker = Worker.current()
        socket.emit('login-response', null, user, worker.isManager())
      }
    }) // end of worker.verifyLogin

  }) // end of socket login

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Log out current Parse user
  socket.on('logout', function(callback)
  {
     Worker.current().logoutCurrentUser()
    // null value means no error occured
    callback(null)
    
  }) // end of socket login

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempts to reset given Parse user password
  socket.on('reset-password', function(email, callback)
  {
    if(!email) {
      email = Worker.current().get('email')
    }

    // DatabaseProvider object handles password reset
    Worker.resetPassword(email, callback)

  }) // end of reset-password

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempt to send the company calendar object to the frontend
  socket.on('retrieve-calendar', function(sendCalendarToClient)
  {
    // Emit result of password reset, err is null if no error exists
    Worker.current().retrieveCalendar(function(error, companyCalendar, companyInfo)
    {
      if(error) { // if there was error while retrieving calendars
        sendCalendarToClient(error) 
      } else { // send array of calendar objects
        sendCalendarToClient(null, companyCalendar, companyInfo)
      }
    })

  }) // end of retrieve-calendar

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempt add new employees to the current signed in Workers company
  // and add the workers company name and phone number
  socket.on('intro-manager-info-add', function(newUserInformation, callback)
  {
    Worker.current().initialManagerInformationCreation(newUserInformation, function(err) 
    {
      // Send null (no error) or the error message back to the front end
      callback(err)
    })
  }) // end of intro-manager-info-add

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempts to retrieve current Parse user
  socket.on('retrieve-current-user', function(callback)
  {
    console.log('In retrieve current user.')
    Worker.current().retrieveCurrentWorker(function(err, user) 
    {
      if(err) {
        // If there is an error send the Parse error
        callback(err)
      } else {
        // If there is no error, send employees array through callback
        callback(null, user)
      }
    })
  }) // end of update-calendar 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempt to retrieve all employees at the current signed in users company
  socket.on('retrieve-all-employees', function(callback)
  {
    Worker.current().retrieveAllEmployeesAtCompany(function(err, employees) 
    {
      if(err) {
        // If there is an error send the Parse error
        callback(err)
      } else {
        // If there is no error, send employees array through callback
        callback(null, employees)
      }
    })
  })

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempts to reset given Parse user password
  socket.on('update-calendar', function(clientCalendars, callback)
  {
    // update calendar in database
    Worker.current().updateCalendar(clientCalendars, function(error) {
      if(error) { // if there was error while updating calendars
        callback(error)

      } else { 
        callback(null)
      }
    })
  }) // end of update-calendar 
  
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempts update company 
  socket.on('update-company', function(companyInfo, callback)
  {
    Worker.current().retrieveCompany(function(error, returnedCompany) {
      returnedCompany.update(companyInfo, function(err) {
        if(err) {
          callback(err) 
        } else {
          callback(null) 
        }
      })
    })
  }) // end of update-calendar 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempts update employee information
  socket.on('update-employee-information', function(employees, callback)
  {
    Worker.updateEmployeeInformation(employees, callback)
  }) // end of update-employee-information

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempts update employee and company information from manager's profile
  socket.on('update-employee-company', function(employees, companyInfo, callback)
  {
    console.log('employees in update socket ' + JSON.stringify(employees))

    var errorOccured = null
    var workerFinished = false
    var companyFinished = false

    Worker.updateEmployeeInformation(employees, function(err) {
      workerFinished = true
      if(err) {
        console.log('im here in error of update employee')
        callback(err)
      } else {
        console.log('im here in update company')
        if(companyFinished)
          callback(null)
      }
    }) // end of updateemployeeinformation()

    Worker.current().retrieveCompany(function(error, returnedCompany) {
      returnedCompany.update(companyInfo, function(err) {
        companyFinished = true
        if(err) {
          console.log('im here in error of update company')
          callback(err)
        } else {
          console.log('im here in update company successful')
          if(workerFinished)
            callback(null)
        }
      }) // end of update()
    })

  })

}) // end of io.socket.on
