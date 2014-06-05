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




    
   //need to grab all current emloyees
   socket.emit('retrieve-all-employees', function(err,employees)
   {

   for( var i = 0; i < employees.length; ++i){

    var id = "id="+i;
    var name = employees[i]
      $(".box").append( '<form '+id+'><div class="name" '+id+'><h2>'+name+'</h2></div><input type="text", placeholder="CHANGENAME", name="name" value="">\
        </input><div class="email" '+id+' ><h2>'+name+''+"@gmail.com"+'</h2></div><input type="text", placeholder="NEW EMAIL", name="email" value=""></input>\
        <div class="role" '+id+'><h2>Employee</h2></div><div class="edit" '+id+'>EDIT</div><div class="submit" '+id+' >SUBMIT</div><div class="cancel" '+id+'>CANCEL</div></form>')
   }
   
    //initally hid button divs
     $(".submit").hide()
     $(".cancel").hide()

     //hide inputs
     $("input").hide()


   //on edit click
   $(".edit").click(function()
   {
     console.log("Made it")
     var id = $(this).closest("div").attr("id");
     
     var submit = "#"+id+".submit"
     var cancel = "#"+id+".cancel"
     var edit = "#"+id+".edit"
     var form = "#"+id+" input"
     $(edit).hide()
     $(form).show()
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
     $("input").hide()
     $(cancel).hide()
     $(submit).hide()
     $(edit).show()

   })

   })



   
     


});