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

// Listens for a successful login verification after an emit of verify-login 
socket.on('login-verified', function(data) {
  console.log('(+) User: ' + data.username + ' successfully connected.')
  // Navigate to home page
  window.location.href = '/home'
})

// Listens for a failed login verification after an emit of verify-login 
socket.on('login-failed', function(data) {
  $("#sidr-right").effect( "shake", {times:2, distance:12}, 500 )
})

// Listens for a successfully created user after an emit of create-user 
socket.on('user-created', function(data) {
  console.log('(+) User: ' + data.username + ' successfully created.')
  // Navigate to home page
  window.location.href = '/home'
})

// Listens for a failed password reset after an emit of reset-password
socket.on('reset-fail', function(data) {
  // TODO: Print reset error message to user
  console.log('(+) Email reset on: ' + data + ' failed.')
})



//TODO how to check if user is logged in??
$(document).ready(function() {
  socket.emit('reset-password', 'asdfasdfasd@gmail.com')

	$('#login-button').click(function() {
    socket.emit('verify-login', [$('#login-user').val(), $('#login-pass').val()])
	})

  $('#login-pass').keydown(function(e) { //TODO is there a way to do this for both #login-pass and #login-user?
    if (e.keyCode == 13) {
      socket.emit('verify-login', [$('#login-user').val(), $('#login-pass').val()])
    }
  });

  $('#signup-button').click(function() {
    socket.emit('create-user', [$('#signup-name').val(), $('#signup-email').val(), 
      $('#signup-pass').val()])
  })

  $('#signup-pass').keydown(function(e) {
    if (e.keyCode == 13) {
    socket.emit('create-user', [$('#signup-name').val(), $('#signup-email').val(), 
      $('#signup-pass').val()])
    }
  });
})