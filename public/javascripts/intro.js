
//when page has loaded
$(document).ready(function()
{
    
    //hide error message
    //$("#error_message").hide();

    //gets rid of two scrollbars
    $('html').css('overflow', 'hidden');

    //clear top forms
    $("#company").val('')
    $("#phone").val('')

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
        console.log(end);
    
    	//apend puts object at bottom of appending div
    	$("#input1").append(end);

        
        //scroll down a little bit to give our user better usability
        /*$('html,body').animate({
            scrollTop: $("#next-button").offset().top
        }, 500);*/

         // end of signup click function()

      
	});

    
    //once done adding employees and ready to submit
    $("#next-button").click(function()
    { 

        //global array to save values incase failed login, no need to re-enter
        var array = [];

        //so we dont loose track of how many divs we have made above ^^^^^

        var readIn = formCount;

    	//while not zero
    	while( readIn ) {

            //bool value to not insert empty forms
            var empty = false;

            //not sure how to pass form+formCount to be serialized
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
	        var x = $(form_id).serializeArray();

            //variable to assign fields read in order of: name, email
            var j = 1;

            //loop to check fields
            $.each(x, function(i, field) {
                
                //if field value is left blank, DO NOT PASS IT IN
                if(field.value == "") {
                  // console.log("YOU ARE DUMB. ENTER IN INFO BRO")
                   empty = true;
                }

                //if first loop
                if( j === 1)
                    Employee.name = field.value;

                if( j === 2 )
                    Employee.email = field.value;

                ++j;              

            });

	        //employee password is name          
            Employee.password = Employee.name;

                       
            //if information wasn't empty make the employee
            if(!empty) {  
               array.push(Employee);
            }
	       	        
	        //decrement amount of forms read in
	        --readIn;
         
    	} //end while readIn


        //set if company name is empty
        var incorrect_company_name = false;

        //manager object
        var company = {

            "name":"",
            "phone":""
        }

        //grab company name and phone number
        var m = $("#input0").serializeArray();

        var k = 1;

        $.each(m, function(i, field) {

            if( k === 1)
                company.name = field.value;

            if( k === 2)
                company.phone = field.value;

            ++k;
        });

        if( company.name == "") {
            incorrect_company_name = true;
        }

        console.log(company.name);
        console.log(company.phone);

        //if company name is empty dont move on
        if( incorrect_company_name ) {

            $("#company").animate({
                'borderWidth': '.23em',
                'borderColor': '#D80000 '
            },500);

            console.log("read. fuck. you. restart.")

            /* Cant get scroll top to work!!!!
            $('html,body').animate({
                scrollTop: $("#company").offset().top
            }, 500);
            */

        }
        //else we are ready to pass this object
        else {

            //create new object to pas
            var company_employee = {

                "companyInfo": company,
                "employees": array

            }
            
        
            //push to back end
            socket.emit('intro-manager-info-add', company_employee, function(error){
                
                //will return 500 if company name or phone number DID NOT SAVE IN PARSE
                if(error){
                    console.log(error.message)
                    $('#error_message').append(error.message)
                    //$("#error_message").show();
                }
                else
                    console.log("We did it!!! Ready to go to manager page");
                
            });
                
        
        }

        //check if objects all processed correctly
        var j = array.length;
        console.log(j);

        for( j = j-1 ;j >= 0 ; --j){

            var tmp = array[j];

            console.log(tmp.name);
            console.log(tmp.email);
            console.log(tmp.password);
            console.log(tmp.assignedRole);
            console.log("\n");
        }


    });



});