/*
 * Summary:      layoutlanding.js handles all user interaction (clicks, submits) 
 *               when the user navigates to the landing page.
 */
$(document).ready(function()
{
  // Make left menu open and slide right 
  $('#menu').sidr({
    name: 'sidr-left',
    side: 'left',
    speed: 100
  })

  /* make right login open and slide left */
  $('#login').sidr({
    name: 'sidr-right',
    side: 'right',
    body: '#login',
    displace: true,
    speed: 200
  })

  $('#login').click(function()
  {
    $('#login-user').focus()
  })
  
  //set form focus into password field
  $('#login').click(function()
  {
    $('#login-user').focus()
  })


  /* clear forms upon page reload */
  $("#login-pass").val('')
  $("#login-user").val('')

  /* hide these elements initially */
  $("#send-email").hide()
  $("#send-button").hide()
  $("#forgot-password").hide()
  
  /* once login-button is clicked again hide these elements */
  $( "#login-button" ).click(function()
  {
     $("#send-email").hide()
     $("#send-button").hide()
  })

  /* if retrieve password is clicked show these elements */
  $( "#forgot-password" ).click(function()
  {
     $("#forgot-password").hide()
     //$("#sidr-right").show();
     //$("#login").show();
     $("#send-email").show()
     $("#send-button").show()   

  })
}) // end document .ready 


/* failed login function */
function failedLogin() {
    
    /* retrieve password displays if you fail login attempt once */
    if(forgotpassword > 0) {
      $("#forgot-password").show();
    }
    
 
    //make login div shake
    $("#sidr-right").effect("shake", {times:2, distance:12}, 500)   


    //highlight border red for username
    $("#login-user").animate({
        'borderWidth': '.23em',
        'borderColor': '#D80000 '
    },500);

    //highlight border red for password
    $("#login-pass").animate({
        'borderWidth': '.23em',
        'borderColor': '#D80000 '
    },500);

    //change placeholder text to prompt user re-input for BOTH FIELDS
    $("#login-user").attr("placeholder", "RE-ENTER USERNAME");

    //clear login in password because thats annoying to have 
    //what you previously type. Leave username
    $("#login-pass").val('');

    //prompt user for re-entry value
    $("#login-pass").attr("placeholder", "RE-ENTER PASSWORD");


/******************** Fade out for USERNAME ************/
   $("#login-user").animate({
        'borderWidth': '.23em',
        'borderColor': '#D80000'
    }, 2000);

    $("#login-user").animate({
        'borderWidth': '.07em',
        'borderColor': '#a7a7a7'
    }, 400);

    $("#login-user").animate({
        'borderWidth': '1px',
        'borderColor': '#a7a7a7'
    }, 100);

/******************FADE OUT FOR PASSWORD***********/

    $("#login-pass").animate({
        'borderWidth': '.23em',
        'borderColor': '#D80000'
    }, 2000);

    $("#login-pass").animate({
        'borderWidth': '.07em',
        'borderColor': '#a7a7a7'
    }, 400);

    $("#login-pass").animate({
        'borderWidth': '1px',
        'borderColor': '#a7a7a7'
    }, 100);

}

