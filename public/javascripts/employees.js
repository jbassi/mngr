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


  function propertyCompare(prop) {
    return function(a, b) {
        return a[prop] > b[prop]
    }
  }

   //need to grab all current emloyees
  socket.emit('retrieve-all-employees', function(err, employees)
  {
      console.log('Retrieve employees...')
      //console.log(JSON.stringify(employees))

      // Sort employees
      employees.sort(propertyCompare('username'))
      
      for( var i = 0; i < employees.length; ++i) {
        // employeeInfo = { "username" : userName, "phonenumber" : phoneNumber,
        //                  "role" : role, "email" : email }
        var id = "id="+i;
        var name = employees[i].username
        //var phone = employees[i].phoneNumber
        var email = employees[i].email
        var position = employees[i].role
        console.log(employees.length)

        $(".box").append( '<form '+id+'><div class="name" '+id+'><h2>'+name+'</h2></div><input type="text", placeholder="CHANGENAME", name="name" value="">\
          </input><div class="email" '+id+'><h2>'+email+'</h2></div><input type="text", placeholder="NEW EMAIL", name="email" value=""></input>\
          <div class="role" '+id+'><h2>'+position+'</h2></div><div class="edit" '+id+'>EDIT</div><div class="submit" '+id+' >SUBMIT</div><div class="cancel" '+id+'>CANCEL</div></form>')
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
     var form = "#"+id+" input"
     $(form).hide()
     $(cancel).hide()
     $(submit).hide()
     $(edit).show()

   })

   })



   
     


});