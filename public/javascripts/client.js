var socket = io.connect()

socket.on('status', function(data) {
  if (data.msg == 'connection established') {
    console.log('(+) socket.io: connection established.')
  } else {
    console.log('(-) socket.io: error connecting to server')
  }
})

socket.on('login-verified', function(data) {
  console.log('(+) User: ' + data.username + ' successfully connected.')
  // Navigate to home page
  window.location.href = '/home'
})

socket.on('user-created', function(data) {
  console.log('(+) User: ' + data.username + ' successfully created.')
  // Navigate to home page
  window.location.href = '/home'
})

//TODO how to check if user is logged in??
$(document).ready(function() {
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