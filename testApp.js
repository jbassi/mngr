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
  app.set('port', process.env.PORT || 3001);
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

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// @@@@@@@@@@@@@@@@@@@@@@@@  DEBUG  @@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Allow the the user input in the console 
// for debugging purposes
var sys = require('sys')
var fs = require('fs')

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
  // note:  d is an object, and when converted to a string it will
  // end with a linefeed.  so we (rather crudely) account for that  
  // with toString() and then substring() 
  var input = d.toString().substring(0, d.length-1)
  var inputInfo = input.split(" "); // Split the input from the console 
  var userInfo
  
  switch(inputInfo[0]) {
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
    case "signUp": // TEST: sign-up
      //userInfo = ['x', 'x@gmail.com', 'x', 'Manager'] // Create dummy user
      userInfo = {
        "name" : "x",
        "email" : "x@gmail.com",
        "password" : "x",
        "assignedRole" : "Employee"
      }

      Worker.create(userInfo,
          // Check if the user was successfully added 
          // err is null if there is not an error 
          function(err, res) {
            if(err) {
              console.log(err)
            } else {
              // Emit user created with response message from databaseProvider
              console.log("New User has been created: " + userInfo[0])
            }
          } // end of callback
      ) // end of Worker create
      break;

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
    case "delete": // TEST: delete a user 
      // TODO: delete specified user
      if('' != null)
        console.log('\'\' is the same as null')
      break;

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
    case "create": // TEST: create new worker
      // If the role was not assigned through the console, 
      // assign it to Employee
      if(!userInfo[3])
        userInfo[3] = ('Employee')

      // do something clever with the input string
      console.log("you entered: [" + 
          input + "]");

      Worker.create(userInfo,
          // Check if the user was successfully added 
          // err is null if there is not an error 
          function(err, res) {
            if(err) {
              console.log(err)
            } else {
              // Emit user created with response message from databaseProvider
              console.log("New User has been created: " + userInfo[0])
            }
          } // end of callback
      ) // end of Worker create
    case "man":
    default: 
      fs.readFile('./test_manual', function(error, buffer) {
        console.log(buffer.toString())
      })
  } // end of switch
})
