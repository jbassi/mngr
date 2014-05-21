var socket = io.connect()
var calendars = []

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
socket.on('login-response', function(error, user) {
  // Check if an error message was passed
  if(error) { // if error occurred during login
    console.error(JSON.stringify(error)) // print out the error on the console

    // make the login field shake
    $('#sidr-right').effect('shake', {times:2, distance:12}, 500)

  } else { // if no error occurred during login
    console.log('(+) User: ' + user.username + ' successfully connected.')
    // TODO: 
    //      1. notifiy the user that the login was successful
    //      2. take the user to approriate page

    // %%%%%% FOR REFERENCE: 
    //        still not sure if we want to retrieve calendar on login
    //        may retrieve calendar when getting onto schedule page 
    // Get users calendar
    // Retrieve calendar with company name
    socket.emit('retrieve-calendar', function(error, companyCalendars) {
      if(!companyCalendars) { // if the calendars are not retrieved
        console.log('(-) Calendar initialization failed.')

      } else { // Calendar successfully passed
        // Loop through companyCalendar and make ClientCalendars 
        // We want to create ClientCalendars because, 
        // we can't call methods with Parse objects
        for(var i=0; i<companyCalendars.length; ++i) {
          calendars.push(new ClientCalendar(companyCalendars[i]))
        }

        // ***************** DEBUG *********************** // 
        console.log(calendars)
        console.log(calendars[0].getWeek(139))
        console.log(calendars[0].indexToDate(366))
        calendars[0].goingToChange() // mark the calendar to changed

        console.log(calendars[0].days[0].getAllShiftsAtDay())
     /* 
        calendars[0].days[0].addShift({
          "employee" : {"username" : "james@gmail.com",
                        "name" : "James" },
          "position" : 'waitor',
          "time_range" : [{"start" : 800, "end" : 1400}], 
          "break_time" : {"start" : 1200, "end" : 1300}
        })
        calendars[0].days[0].addShift({
          "employee" : {"username" : "jeremy@gmail.com", "name" : "Jeremy" },
          "position" : 'waitor',
          "time_range" : [{"start" : 800, "end" : 1400}], 
          "break_time" : {"start" : 1200, "end" : 1300}
        })
        console.log(calendars[0].days[0].getAllShiftsAtDay())

        calendars[0].days[0].editShift(1, {
          "employee" : {"username" : "colby@gmail.com", "name" : "Colby" },
          "break_time" : {"start" : 1100, "end" : 1200}
        })

        //calendars[0].days[0].deleteShift(1)

        console.log('after the delete shift')
        console.log(calendars[0].days[0].getAllShiftsAtDay())
     */ 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% // 
// This should be placed somehwere else 
// so when the button is pressed, this will start emitting
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% // 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Emits for calendar update
// Pass CliendCalendar array to server 
socket.emit('update-calendar', calendars, function(error) {
  if(error) {
    //TODO: There was error while updating calendar. Let the user know
    console.log('there was an error while updating the calendars')
  } else {
    //TODO: The update was done successfully. Let the user know
    console.log('the calendars was updated successfully')
  }
}) // end of calendar-update 





      } 
    }) // end emit 'retrieve-calendar'
  }
}) // end of login-response

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Listens for a sign-up response
socket.on('sign-up-response', function(error, user) {
  if(error) {
    // Email / username already taken. 
    // TODO: 
    //      1. Alert user
    console.error(JSON.stringify(error)) // print out the error to console

  } else {
    console.log('(+) User: ' + user.username + ' successfully created.')
    // TODO: 
    //      1. Take the user to the next approriate page 
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
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
$(document).ready(function() {

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Even handle when login is clicked
	$('#login-button').click(function() {
    emit_login()
	})

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Event handle when <CR> was pressed on login 
  $('#login-pass').keydown(function(e) { //TODO is there a way to do this for both #login-pass and #login-user?
    if (e.keyCode == 13) {
      emit_login()
    }
  }) 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Even handle when sign-up is clicked
  $('#signup-button').click(function() {
    emit_singUp()
  })

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Event handle when <CR> was pressed on sign-up
  $('#signup-pass').keydown(function(e) {
    if (e.keyCode == 13) {
      emit_singUp()
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
  });
  */

}) // end of $(document)

function emit_login() {
  socket.emit('login', {
    "user" : $('#login-user').val(),
    "password" : $('#login-pass').val()
  })
}

function emit_singUp() {
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
