// import client.js for other function calls 


/* When document opens go here */
$(document).ready(function()
{
  // help scroll to info once get started has been clicked 
  $("#scroll, .features").click(function()
  {
    $.sidr('close', 'sidr-left')
    $('html, body').animate({
      scrollTop: $("#info").offset().top
    }, 500);
  })


  /*
   * Make signup login appear once header has been clicked. 
   * Will also scroll to top of page if button at the bottom
   * is clicked 
   */
  $(".signup").click(function()
  {
    $(".home").parent().removeClass('active')
    $(this).parent().addClass('active')
    $.sidr('close', 'sidr-left')
    $( "#tagline" ).fadeOut( "slow", function() {})
    $( "#signup-form" ).fadeIn( "slow", function() {})
 
    $('html, body').animate({
      scrollTop: $("#header").offset().top
    }, 500)
  }) // end of signup click function()
}) // end of document ready 

// Resize window when menus slide right or left 
$(window).resize(function ()
{
  $.sidr('close', 'sidr-left');
  $.sidr('close', 'sidr-right');
})
/*
// not sure what you do bruh 
$("#menu").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount)
  {
    $.sidr('close', 'sidr-left');
  }
})
*/
// Once document closes kill these applications 



