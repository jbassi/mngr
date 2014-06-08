var socket = io.connect()

//if forgot password more than 2-3 times will display forgot email link
var forgotpassword = 0
//require index.js for jquery functions

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// All socket requests defined below
// Listens for a connection to the backend
socket.on('status', function(data)
{
  if (data.msg == 'connection established') {
    console.log('(+) socket.io: connection established.')
  } else {
    console.log('(-) socket.io: error connecting to server')
  }
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Listens for a login-response, if you dont type anything
// or dont type a password
socket.on('login-response', function(error, user, isManager)
{
  // Check if an error message was passed
  if(error) { // if error occurred during login
    console.error(JSON.stringify(error)) // print out the error on the console

    //for displaying forgot email link
    forgotpassword++;

    //call failedLogin to display css
    failedLogin();

    // make the login field shake
    $('#sidr-right').effect('shake', {times:2, distance:12}, 500)

  } else { // if no error occurred during login
    console.log('(+) User: ' + user.username + ' successfully connected.')
    // TODO: 
    //      1. notifiy the user that the login was successful

    if(isManager)
      window.location.href = '/home'
    else 
      window.location.href = '/employee'
  } 
}) // end of login-response

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Listens for a sign-up response
socket.on('sign-up-response', function(error, user)
{
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
    window.location.href = '/intro'
  }
}) // end of sign-up-response 

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// Listens for a password reset response 
socket.on('reset-password-response', function(data)
{
  if(data == null) { // Reset successful
    console.log('(+) Password reset successful.')
  } else {
    console.log('(-) Password reset unsuccessful.')
  }
}) // end of password-reset-response


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
$(document).ready(function()
{

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Even handle when login is clicked
	$('#login-button').click(function()
  {
    emit_login()
	})

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Event handle when <CR> was pressed on login 
  $('#login-pass').keydown(function(e)
  { //TODO is there a way to do this for both #login-pass and #login-user?
    if (e.keyCode == 13) 
      emit_login()
  }) 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Even handle when sign-up is clicked
  $('#signup-button').click(function()
  {
    emit_singUp()
  })

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // Event handle when <CR> was pressed on sign-up
  $('#signup-pass').keydown(function(e) {
    if (e.keyCode == 13) 
      emit_singUp()
  })

  
  //On button click
  $('#send-button').click(function() {
    emit_passwordReset()
  })
  
}) // end of $(document)

function emit_passwordReset()
{
  socket.emit('reset-password', {
    "email" : $('#send-email').val()
  })
}

function emit_login()
{
  socket.emit('login', {
    "user" : $('#login-user').val(),
    "password" : $('#login-pass').val()
  })
}

function emit_singUp()
{
  socket.emit('sign-up', {
    "name" : $('#signup-name').val(),
    "email" : $('#signup-email').val(), 
    "password" : $('#signup-pass').val(),
    "assignedRole" : 'Manager',
    "phoneNumber" : $('#telephone-num').val(),
    "companyName" : $('#company-name').val(),
    "isOnSignUp" : true
  })  
}
