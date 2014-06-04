$(document).ready(function() {

    $('#menu').sidr({
        name: 'sidr-left',
        side: 'left',
        body: '#container',
        displace: true,
        resize: true,
        speed: 100
    });

    $(window).resize(function () {
      $.sidr('close', 'sidr-left');

    });

    //logout user
    $(".n2 a").click(function()
    {

        socket.emit('logout',function(error)
        {
          //if(error)
          //console.log(error)
          console.log("Made it to logout User")
          window.location.href = '/'
        })

   })

   //initally hid button divs
   $(".submit").hide()
   $(".cancel").hide()
   //on edit click
   $(".edit").click(function()
   {
     console.log("Made it")
     var id = $(this).closest("div").attr("id");
     
     var submit = "#"+id+".submit"
     var cancel = "#"+id+".cancel"
     var edit = "#"+id+".edit"
     $(edit).hide()
     $(submit).show()
     $(cancel).show()

   })


   //on cancel click
   $(".cancel").click(function()
   {
     console.log("Made it")
     var id = $(this).closest("div").attr("id");
     
     var submit = "#"+id+".submit"
     var cancel = "#"+id+".cancel"
     var edit = "#"+id+".edit"
     $(cancel).hide()
     $(submit).hide()
     $(edit).show()

   })

   
   //need to grab all current emloyees
   socket.emit('retrieve-all-employees', function(err,employees)
   {

    console.log(employees)

    console.log("Made it back from retrieve  retrieve-all-employees")


    for( var i = 0; i < employees.length; ++i)
      console.log(employees[i].email)
   })


});