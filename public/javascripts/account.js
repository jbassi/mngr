var FORM_PROFILE_NAME = 0
var FORM_PROFILE_EMAIL = 1
var FORM_PROFILE_PHONE = 2
var FORM_COMPANY_NAME = 0
var FORM_COMPANY_PHONE = 1

$(document).ready(function()
{

  socket.emit('retrieve-current-user', function(err, currentUser) 
  {
    if(!err) {
      if(currentUser.role == 'Employee') {
        $('#right').remove()
      }
    } else {
      console.log('Error retrieving current user.')
    }
  })

 //object one to insert into our array is for manager
  var profileSettings = { 
    "id" : "",
    "employeeName" : "",
    "email" : "",
    "phoneNumber" : "",
    "currentPassword" : "", 
    "newPassword" : ""
  }

  //company object
  var companySettings = {
    "name" : "",
    "phoneNumber" : "",
    "companyInfo" : {
      "hours" : {"day_start" : 6, "day_end" : 22}, 
      "positions" : []
    }
  }

  socket.emit('retrieve-current-user', function(err, currentUser) 
  {
    if(!err) {
      $('#signup-name').val(currentUser.employeeName)
      $('#signup-email').val(currentUser.email)
      $('#signup-phone').val(currentUser.phoneNumber)
      profileSettings.id = currentUser.id
      console.log(JSON.stringify(profileSettings))
    } else {
      console.log('Error retrieving current user.')
      $('#signup-name').val('')
      $('#signup-email').val('')
      $('#signup-phone').val('')
    }
  })

  //reset all field values but not the button
  $('#signup-pass').val('')

  //show dropdown
  $("#profile").click(function()
  {
    if(document.getElementById("dropdown").style.display == "none" || !document.getElementById("dropdown").style.display)
      document.getElementById("dropdown").style.display = "block"
    else
      document.getElementById("dropdown").style.display = "none"

    $(this).mouseleave(function () {
      document.getElementById("dropdown").style.display = 'none'
    })
  })

  //logout user
  $("#d2 a").click(function()
  {
    console.log("Made it to on click")

    socket.emit('logout',function(error)
    {
      //if(error)
      //console.log(error)
      console.log("Made it to logout User")
      window.location.href = '/'
    })

  })
    //hide message divs
    $("#error").hide()
    $("#correct").hide()

    //menu slider
    $('#menu').sidr({
	    name: 'sidr-left',
	    side: 'left',
	    body: '#container',
	    displace: true,
	    resize: true,
	    speed: 100
    });

    //resize window for slider
    $(window).resize(function () {
	      $.sidr('close', 'sidr-left');
	  });

	//if clicked save information users entered to change
	$("#change-button").click(function()
  {
    //hide error message
    $("#error").hide()

    //then empty error message
    $("#error").empty()

    //hide message div
    $("#correct").hide()

    //clear message div
    $("#correct").empty()

    // Get all profile information field values
    var profileInformation = $("#signup-form").serializeArray()

  	//get company information
  	var companyInformation = $("#signup-form1").serializeArray()

    /*
      var FORM_PROFILE_NAME = 0
      var FORM_PROFILE_EMAIL = 1
      var FORM_PROFILE_PHONE = 2
    */

    /*
    employeeInfo = { "id": , employeeName" : , 
                     "email" : emailToChange, 
                     "phoneNumber" : phoneNumber, "currentPassword" : "", 
                     "newPassword" : "" }
    */

    // Loop through form information and populate JSON
    for(var i = 0; i < profileInformation.length; ++i) {
      if(i === FORM_PROFILE_NAME) {
        // Populate JSON object name field
        profileSettings.employeeName = profileInformation[i].value
      }
      if(i === FORM_PROFILE_EMAIL) {
        // Populate JSON object name field
        profileSettings.email = profileInformation[i].value
      }
      if(i === FORM_PROFILE_PHONE) {
        // Populate JSON object name field
        profileSettings.phoneNumber = profileInformation[i].value
      }
    }

    /*
      var FORM_COMPANY_NAME = 0
      var FORM_COMPANY_PHONE = 1
    */

    // Loop through company information and populate JSON
    for(var i = 0; i < companyInformation.length; ++i) {
      if(i === FORM_COMPANY_NAME) {
        // Populate JSON object name field
        companySettings.name = companyInformation[i].value
      }
      if(i === FORM_COMPANY_PHONE) {
        // Populate JSON object name field
        companySettings.phoneNumber = companyInformation[i].value
      }
    }

    // Pass new profile settings to backend for updating
    socket.emit('update-employee-company', [profileSettings], companySettings 
                , function(err) 
    {
      if(!err) {
        $("#correct").append('Successfully Changed')
        $("#correct").show()
      } else {
        console.log('Unsuccessful update!!!!!!!')
        // TODO: Display unsuccessful error to the user
      }
    })
  })
})
