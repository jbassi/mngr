var socket = io.connect()
var calendar

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// All socket requests defined below
// Listens for a connection to the backend
socket.on('status', function(data) {
  if (data.msg == 'connection established') {
    console.log('(+) socket.io: connection established.')
  } else {
    console.log('(-) socket.io: error connecting to server')
  }
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Listens for a login-response
socket.on('login-response', function(data) {
  // Check if an error message was passed
  switch(data) {
    case 200:
    case 201:
      console.log('(~) Username or password missing.')
      // TODO: Display message to user
      break
    case 101:
      console.log('(~) Invalid username or password.')
      break
    default:
      console.log('(+) User: ' + data.username + ' successfully connected.')
      // Navigate to home page
      // window.location.href = '/home'
      
      // Get users calendar
      // Retrieve calendar with company name
      socket.emit('retrieve-calendar')
      
      socket.on('retrieve-calendar-response', function(companyCalendar) {
        if(!companyCalendar) {
          // Error -- args is null
          console.log('(-) Calendar initialization failed.')
        } else {
          // Calendar successfully passed
          // console.log('(+) ' + args.test + ' company calendar initialized.')
          console.log(companyCalendar)
          calendar = new ClientCalendar(companyCalendar)
          //calendar.writeSomething()
        //  console.log(calendar.indexToDate(30))


        }
      })

      return
  } // end switch()
  
  // make the login field shake
  $('#sidr-right').effect('shake', {times:2, distance:12}, 500)
}) // end of login-response

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Listens for a sign-up response
socket.on('sign-up-response', function(data) {
  if(data === 203 || data === 202) {
    // Email / username already taken. 
    // TODO: Alert user
    console.log('(-) Username already taken.')
  } else {
    console.log('(+) User: ' + data.username + ' successfully created.')
    // Navigate to home page
    window.location.href = '/home'
  }
}) // end of sign-up-response 

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Listens for a password reset response 
socket.on('password-reset-response', function(data) {
  if(data == null) {
    console.log('(+) Password reset successful.')
    // Reset successful
  } else {
    console.log('(-) Password reset unsuccessful.')
  }
}) // end of password-reset-response

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Listens for calendar update
socket.on('calendar-update', function() {

}) // end of calendar-update 


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
//TODO how to check if user is logged in??
$(document).ready(function() {

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Even handle when sign-up is clicked
	$('#login-button').click(function() {
    socket.emit('login', {
      "user" : $('#login-user').val(),
      "password" : $('#login-pass').val()
    })
	})

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Event handle when <CR> was pressed on sign-up
  $('#login-pass').keydown(function(e) { //TODO is there a way to do this for both #login-pass and #login-user?
    if (e.keyCode == 13) {
      socket.emit('login', {
        "user" : $('#login-user').val(),
        "password" : $('#login-pass').val()
      })
    }
  }) 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Even handle when sign-up is clicked
  $('#signup-button').click(function() {
    socket.emit('sign-up', {
      "name" : $('#signup-name').val(),
      "email" : $('#signup-email').val(), 
      "password" : $('#signup-pass').val(),
      "assignedRole" : 'Manager',
      "phoneNumber" : /*$('#telephone-num').val()*/'555-5555',
      "companyName" : /* $('#company-name').val()*/'PANCAKES4U',
      "isOnSignUp" : true
    })  
  })

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Event handle when <CR> was pressed on sign-up
  $('#signup-pass').keydown(function(e) {
    if (e.keyCode == 13) {
      socket.emit('sign-up', {
        "name" : $('#signup-name').val(),
        "email" : $('#signup-email').val(), 
        "password" : $('#signup-pass').val(),
        "assignedRole" : 'Manager',
        "phoneNumber" : /*$('#telephone-num').val()*/'555-5555',
        "companyName" : /* $('#company-name').val()*/'PANCAKES4U',
        "isOnSignUp" : true
      })  
    }
  })

/*
//On button click
  $('#forgetPassword-button').click(function() {
    socket.emit('reset-password', [$('#signup-name').val()])
  })
//On enter key
  $('#forgetPassword-pass').keydown(function(e) {
    if (e.keyCode == 13) {
    socket.emit('reset-password', [$('#signup-name').val()])
    }
  }); */

})
