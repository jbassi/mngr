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
    var totalEditButtonsActive = 0
    console.log('Retrieve employees...')
    //console.log(JSON.stringify(employees))

    // Sort employees
    employees.sort(propertyCompare('username'))
    
    for( var i = 0; i < employees.length; ++i) {
      // employeeInfo = { "username" : userName, "phonenumber" : phoneNumber,
      //                  "role" : role, "email" : email }
      var id = "id="+i;
      var name = employees[i].username
      var phone = employees[i].phoneNumber
      var email = employees[i].email
      var position = employees[i].role

      $(".box").append( '<form '+id+'><div class="name" '+id+'><h2>'+name+'</h2></div><input type="text", placeholder="CHANGENAME", name="name" value="">\
        </input><div class="email" '+id+'><h2>'+email+'</h2></div><input type="text", placeholder="NEW EMAIL", name="email" value=""></input>\
        <div class="role" '+id+'><h2>'+position+'</h2></div><div class="edit" '+id+'>EDIT</div><div class="cancel" '+id+'>CANCEL</div></form>')
    }

    $(".box").append('<div class="submit">SUBMIT</div>')
 
    //initally hid button divs
    $(".submit").hide()
    $(".cancel").hide()

    //hide inputs
    $("input").hide()

    //on edit click
    $(".edit").click(function()
    {
      $(".submit").css('display', 'block').show()
      ++totalEditButtonsActive
      var id = $(this).closest("div").attr("id");

      var cancel = "#"+id+".cancel"
      var edit = "#"+id+".edit"
      var form = "#"+id+" input"
      $(edit).hide()
      $(form).show()
      $(cancel).show()
    })

    // Update specific user information to Parse
    $(".submit").click(function()
    {
      console.log('SUBMIT')
      var employeesToUpdate = []

      for(var i = 0; i < employees.length; ++i) {
        // Loop through all fields and see if there is a value to save
        var nameToChange = $("#"+i).find('input[name="name"]').val()
        var emailToChange = $("#"+i).find('input[name="email"]').val()

        // Construct JSON to update
        if(nameToChange !== '' || emailToChange !== '') {
          employeeInfo = { 
            "id" : employees[i].id,
            "employeeName" : nameToChange,
            "email" : emailToChange,
            "phoneNumber" : "",
            "currentPassword" : "", 
            "newPassword" : ""
          }
          employeesToUpdate.push(employeeInfo)
        }
      }

      if(employeesToUpdate.length > 0) {
        // Add updated item to Parse 
        socket.emit('update-employee-information', employeesToUpdate, 
          function(err)
          {
            if(err) {
              console.log('Update failed.')
            } else {
              console.log('Update successful.')
              // Refresh page
              location.reload()
            }
          }
        )
        // console.log(employeesToUpdate.length)
        console.log(JSON.stringify(employeesToUpdate))
      }
    })

    //on cancel click
    $(".cancel").click(function()
    {
      --totalEditButtonsActive
      if(totalEditButtonsActive == 0) {
        $(".submit").hide()
      }

      var id = $(this).closest("div").attr("id");

      // var submit = "#"+id+".submit"
      var cancel = "#"+id+" .cancel"
      var edit = "#"+id+" .edit"
      var input = "#"+id+" input"

      $(input).closest('form').find("input[type=text], textarea").val("");

      $(input).hide()
      $(cancel).hide()
      // $(submit).hide()
      $(edit).show()
    })
  })
})
