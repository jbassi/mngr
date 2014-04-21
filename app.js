
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var DatabaseProvider = require('./database-provider').DatabaseProvider

// all environments
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

io.configure(function () { 
  io.set("transports", ["xhr-polling"])
  io.set("polling duration", 10)
})
io.set('log level', 1)

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Configure page routes
require('./routes/router.js')(app)

app.databaseProvider = new DatabaseProvider(app, server)

io.sockets.on('connection', function(socket) {
  socket.emit('status', {msg:'connection established'})

  socket.on('create-user', function(args) {
    var name = args[0].toString()
    var email = args[1].toString()
    var username = args[2].toString()
    var password = args[3].toString()
    console.log('[~] Attempting to create user ' + username + '.')
    app.databaseProvider.createUser(name, email, username, password, function(err, res) {
      if(err) {
        console.log(err)
        // TODO handle error
      } else {
        socket.emit('user-created', res)
      }
    })
  })

  socket.on('verify-login', function(args) {
    var user = args[0].toString()
    var password = args[1].toString()
    app.databaseProvider.verifyLogin(user, password, function(err, res) {
      if(err) {
        // TODO handle error
      } else {
        socket.emit('login-verified', res)
      }
    })
  })
})
