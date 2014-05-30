// Require module dependencies and create the app server.
var express = require('express')
var app = express()
var http = require('http')
var path = require('path')
var server = http.createServer(app)
var io = require('socket.io').listen(server)
var Worker = require('./server/worker').Worker
var Calendar = require('./server/calendar').Calendar

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

// Configure socket.io settings
io.configure(function()
{ 
  io.set("transports", ["xhr-polling"])
  io.set("polling duration", 10)
})

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
        socket.emit('login-response', null, user)
      }
    }) // end of worker.verifyLogin

  }) // end of socket login

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempts to reset given Parse user password
  socket.on('reset-password', function(args)
  {
    // DatabaseProvider object handles password reset
    Worker.resetPassword(args, function(err)
    {
      // Emit result of password reset, err is null if no error exists
      socket.emit('reset-password-response', err)
    }) 

  }) // end of reset-password

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempt to send the company calendar object to the frontend
  socket.on('retrieve-calendar', function(sendCalendarsToClient)
  {
    // Emit result of password reset, err is null if no error exists
    var currentUser = Worker.current()

    currentUser.retrieveCalendar( function(error, companyCalendars)
    {
      if(error) { // if there was error while retrieving calendars
        sendCalendarsToClient(error) 
      } else { // send array of calendar objects
        sendCalendarsToClient(null, companyCalendars) 
      }
    })

  }) // end of retrieve-calendar

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Attempts to reset given Parse user password
  socket.on('update-calendar', function(clientCalendars, callback)
  {
    // update calendar in database
   /* 
    Worker.current().updateCalendar(clientCalendars, function(error) {
      if(error) { // if there was error while updating calendars
        callback(error)

      } else { 
        callback(null)
      }
    })
   */ 
  }) // end of update-calendar 
}) // end of io.socket.on
