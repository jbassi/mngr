// Require module dependencies and create the app server.
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var Worker = require('./server/worker').Worker

// Configure app settings 
app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  // app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
})

// Configure socket.io settings
io.configure(function () { 
  io.set("transports", ["xhr-polling"])
  io.set("polling duration", 10)
})
io.set('log level', 1)

// Development specific items go here
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Configure page routes -- this is equivalent to:
// var req = require('./routes/router.js')
// req(app)
require('./routes/router.js')(app)

// Create a databaseProvider object that links to the Parse database
require('./server/database-provider')(app, server, function(err) {
  if(!err) {
    // No errors connecting to Parse, continue with app functionality 
    console.log('[+] Successfully connected to Parse.')   
  }
})

// ********************** ****************** ********************** //
// ********************** Socket Connections ********************** //
// ********************** ****************** ********************** //

// Configure socket.io server emits and on messages
io.sockets.on('connection', function(socket) {
  // Emit a successful connection message if socket.io connects
  socket.emit('status', {msg:'connection established'})

  // Attempts to create a new Parse user by passing socket.io args array 
  // data to databaseProvider
  socket.on('sign-up', function(args) {
    console.log('[~] Attempting to create user ' + args[0] + '.')

    var worker = new Worker()
    worker.createUser(args,
      // Check if the user was successfully added 
      // err is null if there is not an error 
      function(err, res) {
        if(err) {
          socket.emit('sign-up-response', err)
          // TODO: handle error messages
        } else {
          // Emit user created with response message from databaseProvider
          socket.emit('sign-up-response', res)
        }
    })
  }) // sign-up

  // Checks Parse for valid login and password passed in via the args array
  socket.on('login', function(args) {
    // Store data locally to pass into databaseProvider 
    var user = args[0] === '' ? null : args[0].toString()
    var password = args[1] === '' ? null : args[1].toString()

    //app.databaseProvider.verifyLogin(user, password, function(err, res) {
    Worker.verifyLogin(user, password,
      function(err, res) {
        // Emit result of verifyLogin
        // err is null if there is not an error 
        if(err) {
          socket.emit('login-response', err)
        } else {
          socket.emit('login-response', res)
        }
    })
  }) // end of verify-login

  // Attempts to reset given Parse user password
  socket.on('reset-password', function(args) {
    // DatabaseProvider object handles password reset
    Worker.resetPassword(args, function(err) {
      // Emit result of password reset, err is null if no error exists
      socket.emit('reset-password-response', err)
    }) 
  }) // end of reset-password
})
