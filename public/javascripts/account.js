<<<<<<< HEAD
$(document).ready(function()
{
    
    //hide message divs
    $("#error").hide()
    $("#correct").hide()

    //reset all field values but not the button
    $('#signup-name,#signup-email,#signup-phone,#sginup-pass').val('')

    //menu slider
    $('#menu').sidr({
	    name: 'sidr-left',
	    side: 'left',
	    body: '#container',
	    displace: true,
	    resize: true,
	    speed: 100
    });

    //profile slider
    $('#profile').sidr({
	    name: 'sidr-right',
	    side: 'right',
	    body: '#profile',
	    displace: true,
	    speed: 200     
    });

    //resize window for slider
    $(window).resize(function () {
	      $.sidr('close', 'sidr-left');
	      $.sidr('close', 'sidr-right');
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

        //array of objects for backend to recieve
        var new_info = [];
        
        //tmp array to get input values
        var tmp = [];

        //object one to insert into our array is for manager
        var Employee = {

            "name":"",
            "email":"",
            "password":"",
            "assignedRole": "Employee",
            "phoneNumber": "",
            "isOnSignUp": false

         };

        //company object
        var company = {

            "name":"",
            "phone":""
        };


        //get all profile information
	    var x = $("#signup-form").serializeArray()

        //loop variable
        var k = 0;

        //loop to check fields
        $.each(x, function(i, field) {

            tmp[k] = field.name;
            tmp[++k] = field.value;  
            ++k;    

    	});

    	//get company information
    	var y = $("#signup-form1").serializeArray()

        //loop to check fields
        $.each(y, function(i, field) {
          
          if( i === 0)
            company.name = field.value;
          if( i === 1)
          	company.phone = field.value;

    	});


        //validation checks in form
    	for( var j = 1; j < tmp.length; j=j+2){

    		if(j === 1)
    	      Employee.name = tmp[j]

    		if(j === 3)
    		  Employee.email = tmp[j]

    		if(j === 5)
    		  Employee.phoneNumber = tmp[j]

    		if(j === 7)	{
    		  var current = tmp[j]
    		  if( current === "")
    		  	var empty_pass = false

    		  var validate = false
            }

            if(j === 9)
              var new_password = tmp[j]

            if(j === 11){

              var change_password = tmp[j]

              if( validate ){
                
                if( new_password === change_password && new_password != "")
                  Employee.password = change_password
                else{
                  $("#error").append('Password Does Not Match')
                  $("#error").show()
                } //set value to ''
                  //highlight field?
              } 
              else{
              	if( empty_pass){
                  $("#error").append('Invalid Current Password')
                  $("#error").show()
                  //set value to ''
                  //highlight field?
                }
              }
            }

            //return;
  		
  		}
       
        if( company.name === ""){
        	if( company.phone === ""){
              //if employee fields are empty as well
              $("#error").append('No Information Entered')
              $("#error").show()
        	}
        }
    	
          
        //pass to backend and check to see nothing went wrong
        $("#correct").append('Successfully Changed')
        $("#correct").show()
        


    });

});




=======
$(document).ready(function()
{
    
  //logout user
  $(".n2 a").click(function()
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

    //reset all field values but not the button
    $('#signup-name,#signup-email,#signup-phone,#sginup-pass').val('')

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

        //array of objects for backend to recieve
        var new_info = [];
        
        //tmp array to get input values
        var tmp = [];

        //object one to insert into our array is for manager
        var Employee = {

            "name":"",
            "email":"",
            "password":"",
            "assignedRole": "Employee",
            "phoneNumber": "",
            "isOnSignUp": false

         };

        //company object
        var company = {

            "name":"",
            "phone":""
        };


        //get all profile information
	    var x = $("#signup-form").serializeArray()

        //loop variable
        var k = 0;

        //loop to check fields
        $.each(x, function(i, field) {

            tmp[k] = field.name;
            tmp[++k] = field.value;  
            ++k;    

    	});

    	//get company information
    	var y = $("#signup-form1").serializeArray()

        //loop to check fields
        $.each(y, function(i, field) {
          
          if( i === 0)
            company.name = field.value;
          if( i === 1)
          	company.phone = field.value;

    	});


        //validation checks in form
    	for( var j = 1; j < tmp.length; j=j+2){

    		if(j === 1)
    	      Employee.name = tmp[j]

    		if(j === 3)
    		  Employee.email = tmp[j]

    		if(j === 5)
    		  Employee.phoneNumber = tmp[j]

    		if(j === 7)	{
    		  var current = tmp[j]
    		  if( current === "")
    		  	var empty_pass = false

    		  var validate = false
        }

            if(j === 9)
              var new_password = tmp[j]

            if(j === 11){

              var change_password = tmp[j]

              if( validate ){
                
                if( new_password === change_password && new_password != "")
                  Employee.password = change_password
                else{
                  $("#error").append('Password Does Not Match')
                  $("#error").show()
                } //set value to ''
                  //highlight field?
              } 
              else{
              	if( empty_pass){
                  $("#error").append('Invalid Current Password')
                  $("#error").show()
                  //set value to ''
                  //highlight field?
                }
              }
            }

            //return;
  		
  		}
       
        if( company.name === ""){
        	if( company.phone === "")
            if( Employee.name === "" )
              if( Employee.email ==="" ){
              //if employee fields are empty as well
              $("#error").append('No Information Entered')
              $("#error").show()
        	}
        }
    	
          
        //pass to backend and check to see nothing went wrong
        //$("#correct").append('Successfully Changed')
        //$("#correct").show()
        


    });

});




>>>>>>> d821728e9d6a8f8da3917fc732b073791a36ea66
