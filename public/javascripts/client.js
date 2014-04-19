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
  window.location.href = '/'
})

$(document).ready(function() {
	$('#login-button').click(function() {
    socket.emit('verify-login', [$('#login-user').val(), $('#login-password').val()])
	})

  $('#signup-button').click(function() {
    socket.emit('create-user', [$('#signup-name').val(), $('#signup-email').val(), 
      $('#signup-user').val(), $('#signup-password').val()])
  })
})