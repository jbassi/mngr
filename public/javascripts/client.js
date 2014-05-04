var socket = io.connect()

// All socket requests defined below
// Listens for a connection to the backend
socket.on('status', function(data) {
  if (data.msg == 'connection established') {
    console.log('(+) socket.io: connection established.')
  } else {
    console.log('(-) socket.io: error connecting to server')
  }
})

// Listens for a login-response
socket.on('login-response', function(data) {
  // Check if an error message was passed
  if(data === 200 || data === 201) {
    console.log('(~) Username or password missing.')
    // TODO: Display message to user
  } else if(data === 101) {
    console.log('(~) Invalid username or password.')
    $("#sidr-right").effect("shake", {times:2, distance:12}, 500)
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
