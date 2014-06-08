
//when page has loaded
$(document).ready(function()
{
    //set cursor into top field on page load
    $('#company').focus();

    //initialize tokenfield
    $('#word-test').tokenField({regex:/^[a-z][\w\-]+$/i});

    //made color array
    var colors = [ '#c85248',  '#d5e15d', '#84c2eb', '#95b4af', '#fbae5e', '#92be75', '#5c6c9d', '#9b9fb0']

    //set cursor into top field on page load
    $('#company').focus();

    //hide error message
    $("#error_message").hide()

    //gets rid of two scrollbars
    $('html').css('overflow', 'hidden')

    //set cursor into top field on page load
    $('#company').focus();

    //clear top forms
    $("#company").val('')
    $("#phone").val('')
   
    //clear start and end time fields
    $('input.time.end.small').val('')
    $('input.time.start.small').val('')

    //initialize how many forms we have. We start with one initially
    var formCount = 1;

    //formCount global
    var total_form = 0;

    //add new form for employee
	$("#add-button").click(function()
	{
        
        //increment ammount of forms input
        ++formCount;

        //easier way to parse in formCount to the form by adding this string in chunks.
        var start = '<form id=';
        var middle = start +'input'+formCount;
        var end = middle +'><input type="text" placeholder="NAME"  name="name" value="" id="employee-name"/><input type="text"  name="email" value="" placeholder="EMAIL" id="employee-email"/></form>';
        console.log(end)
    
    	//apend puts object at bottom of appending div
    	$("#input1").append(end);

        
        //set focus to new emploee pages


        //send cursor into the newly added field yo

        $('#input'+formCount+' #employee-name').focus();
        //scroll down a little bit to give our user better usability
        /*$('html,body').animate({
            scrollTop: $('#error_message').offset().top
        }, 500);*/

         // end of signup click function()

      
	});

    
    //once done adding employees and ready to submit
    $("#next-button").click(function()
    { 
      
        //hide the error message in case we need to display new error message
        $("#error_message").hide()
        //then empty it
        $("#error_message").empty()
        //reset border on company name
        $("#company").animate({
                'borderWidth': '1px',
                'borderColor': '#a7a7a7'
        },100);

        //global array to save values incase failed login, no need to re-enter
        var array = [];

        //so we dont loose track of how many divs we have made above ^^^^^

        var readIn = formCount;

    	//while not zero
    	while( readIn ) {

            //bool value to not insert empty forms
            var empty = false;

            //form id to be serialized
            var form_id = "#input"+readIn;

            //debug id form#
            //console.log(form_id);

            //make a JSON object
            var Employee = {

            "name":"",
            "email":"",
            "password":"",
            "assignedRole": "Employee",
            "phoneNumber": "",
            "isOnSignUp": false

            };

	        //serialize form data into JSON array and make JSON object after
	        var x = $(form_id).serializeArray()


            //loop to check fields
            $.each(x, function(i, field) {
                
                //if field value is left blank, DO NOT PASS IT IN
                if(field.value == "") {
                   empty = true;
                }

                //if first loop
                if( i === 0)
                    Employee.name = field.value;

                if( i === 1)
                    Employee.email = field.value;       

            });

	        //employee password is name          
            Employee.password = Employee.name;

                       
            //if information wasn't empty make the employee
            if(!empty) {  
               array.push(Employee)
            }
	       	        
	        //decrement amount of forms read in
	        --readIn;
         
    	} //end while readIn

        
        //set if company name is empty
        var incorrect_company_name = false;

        //manager object
        var company = {

            "name":"",
            "phoneNumber":"",
            "companyInfo" : {
              "hours" : {"day_start" : 6, "day_end" : 22},
              "positions" : []
            }
        }
         
        //label and color for position field 
        //{key:1, label: "chef", color: "#748585"}
        //ar postion_field ={
       //     'key' : '1'
        //    label : "server"
       //     color: "#567456"
       // }
       //1) make array of colors
       //2) make sure not duplicate
       //3) assign color to position
       //4) make sure no duplicate insert of colors
       //5) store in array of json objects
        //grab company name and phone number
        var m = $("#input0").serializeArray();

        var pos_string = m[2].value

        //create array of positions
        var pos_array = []
        //send parsed values to array
        pos_array = pos_string.split(',')

        //array to hold positions objects
        var key_label_color = []   


        //check if duplicate here(doesnt work. scroll down)
        hasDuplicate(pos_array, function(noDuplicateArray) 
        {
            pos_array = noDuplicateArray
        })
        

        //print all positions in array
        //I starts at one for key (not sure if necessary)
        
        for( var j = 0,k =1; j < pos_array.length; ++j, ++k){
             console.log('im her in the for loop ' + pos_array.length)
            var tmp_object = {
                'key': k,
                'label': pos_array[j],
                'color': colors[j]
            }

            key_label_color.push(tmp_object)
        }        
        
        $.each(m, function(i, field) {

            if( i === 0)
                company.name = field.value;

            if( i === 1)
                company.phoneNumber = field.value;
            //if i === 2 assign position values
            console.log(field.name + " : " + field.value)
        });

        if( company.name == "") {
            incorrect_company_name = true;
        }

        //if company name is empty dont move on
        if( incorrect_company_name ) {

            $("#company").animate({
                'borderWidth': '.23em',
                'borderColor': '#D80000 '
            },500);
  
            $("#error_message").append("Please Enter A Company Name")
            $("#error_message").show()


        }
        //else we are ready to pass this object
        else {

            //create new object to pass
            var company_employee = {

                "companyInfo": company,
                "employees": array

            }
            
        
            //push to back end
            socket.emit('intro-manager-info-add', company_employee, function(error){
                
                //will return error message as a string
                if(error){
                    console.log(error.message)
                    $('#error_message').append(error.message)
                    $("#error_message").show();
                    
                }
                else{
                    console.log("We did it!!! Ready to go to manager page")
                    window.location.href = '/home'

                    
                }
                
            });
                
        
        }

        
    });

    function hasDuplicate(arr, callback) {
        //send string to lowercase as well
        var sorted_arr = arr.sort()

        var results = [];
        for (var i = 0; i < arr.length - 1; i++) {
            if (sorted_arr[i + 1] == sorted_arr[i]) {
                console.log('im here bc theres duplicate IF')
                results.push(sorted_arr[i]);
            }
            if( i == arr.length-2) {
                callback(results)
            }
        }

    }   


});


