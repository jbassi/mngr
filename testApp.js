// Require module dependencies and create the app server.
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var Worker = require('./server/worker').Worker
var Parse = require('parse').Parse

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

//Parse.Cloud.useMasterKey()
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
      if(inputInfo.length < 5) {
        console.log("not enough arguments. Look at the manual to use \"create\" test")
        break;
      }

      userInfo = {
        "name" : inputInfo[1],
        "email" : inputInfo[2],
        "password" : inputInfo[3],
        "assignedRole" : "Manager",
        "phoneNumber" : "xxx-xxx-xxxx",
        "isOnSignUp" : true, 
        "companyName" : inputInfo[4]
      }

      Worker.create(userInfo,
          // Check if the user was successfully added 
          // err is null if there is not an error 
          function(err, res) {
            if(err) {
              console.log(err)
            } else {
              // Emit user created with response message from databaseProvider
              console.log("New User has been created: " + userInfo.email)
            }
          } // end of callback
      ) // end of Worker create
      
      break;

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
    case "create": // TEST: create new worker
      if(inputInfo.length < 4) {
        console.log("not enough arguments. Look at the manual to use \"create\" test")
        break;
      }

      // If the role was not assigned through the console, 
      // assign it to Employee
      if(inputInfo.length == 4)
        inputInfo[4] = 'Employee'

      // do something clever with the input string
      console.log("you entered: [" + 
          inputInfo + "]");

      userInfo = {
        "name" : inputInfo[1],
        "email" : inputInfo[2],
        "password" : inputInfo[3],
        "assignedRole" : inputInfo[4],
        "phoneNumber" : "xxx-xxx-xxxx",
        "isOnSignUp" : false
      }

      Worker.create(userInfo,
          // Check if the user was successfully added 
          // err is null if there is not an error 
          function(err, res) {
            if(err) {
              console.log(err + " error has occurred")
            } else {
              // Emit user created with response message from databaseProvider
              console.log("New User has been created: " + inputInfo[1])
            }
          } // end of callback
      ) // end of Worker create
      break;

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
    case "delete": // TEST: delete a user 
      if(inputInfo.length != 2) {
        console.log("args count is not correct. Look at the manual to use \"delete\" test")
        break; 
      }

      Worker.delete(inputInfo[1]) // username as parameter
      break;

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
    case "login":
      if(inputInfo.length != 3) {
        console.log("args count is not correct. Look at the manual to use \"delete\" test")
        break; 
      }
      
      userInfo = {
        "user" : inputInfo[1],
        "password" : inputInfo[2]
      }

      Worker.verifyLogin(userInfo, function(error, response) {
        if(!error)
         console.log('logged in')
      })
      break;

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
    case "current": 
      console.log('the current worker is ' + JSON.stringify(Worker.current()))
      break;

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
    case "man":
      fs.readFile('./test_manual', function(error, buffer) {
        console.log(buffer.toString())
      })
    default: 
      console.log('Please look at the man for right test')
  } // end of switch
})
