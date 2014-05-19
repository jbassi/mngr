var socket = io.connect()

//if forgot password more than 2-3 times will display forgot email link
var forgotpassword = 0;
//require index.js for jquery functions


// All socket requests defined below
// Listens for a connection to the backend
socket.on('status', function(data) {
  if (data.msg == 'connection established') {
    console.log('(+) socket.io: connection established.')
  } else {
    console.log('(-) socket.io: error connecting to server')
  }
})

// Listens for a login-response, if you dont type anything
// or dont type a password
socket.on('login-response', function(data) {
  // Check if an error message was passed
  if(data === 200 || data === 201) {

    //display log error
    console.log('(~) Username or password missing.')

    //for displaying forgot email link
    forgotpassword++;

    //call failedLogin to display css
    failedLogin();

    


    // TODO: Display message to user
  } 
  
  //for displaying invalid password 
  else if(data === 101) {
    console.log('(~) Invalid username or password.')
    //shake whenever there is an error
    $("#sidr-right").effect("shake", {times:2, distance:12}, 500)

    //for displaying forgot email link
    forgotpassword++;
    
    //call failed login to display css
    failedLogin();
    
    
  
  } else {
    console.log('(+) User: ' + data.username + ' successfully connected.')
    // Navigate to home page
    window.location.href = '/home'
  }
})

// Listens for a sign-up response
socket.on('sign-up-response', function(data) {
  if(data === 203) {
    // Email / username already taken. 
    // TODO: Alert user
    console.log('(-) Username already taken.')
  } else {
    console.log('(+) User: ' + data.username + ' successfully created.')
    // Navigate to home page
    window.location.href = '/home'
  }
})

// Listens for a password reset response 
socket.on('password-reset-response', function(data) {
  if(data == null) {
    console.log('(+) Password reset successful.')
    // Reset successful
  } else {
    console.log('(-) Password reset unsuccessful.')
  }
})

//TODO how to check if user is logged in??
$(document).ready(function() {
  $('#login-button').click(function() {
    socket.emit('login', [$('#login-user').val(), $('#login-pass').val()])
  })

  $('#login-pass').keydown(function(e) { //TODO is there a way to do this for both #login-pass and #login-user?
    if (e.keyCode == 13) {
      socket.emit('login', [$('#login-user').val(), $('#login-pass').val()])
    }
  });

  $('#signup-button').click(function() {
    socket.emit('sign-up', [$('#signup-name').val(), $('#signup-email').val(), 
      $('#signup-pass').val(), 'Manager',/* $('#company-name').val()*/'PANCAKES4U', /*$('#telephone-num').val()*/'555-5555' ])
  })

  $('#signup-pass').keydown(function(e) {
    if (e.keyCode == 13) {
    socket.emit('sign-up', [$('#signup-name').val(), $('#signup-email').val(), 
      $('#signup-pass').val(), 'Manager', /* $('#company-name').val()*/'PANCAKES4U', /*$('#telephone-num').val()*/'555-5555' ])
    }
  });

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
