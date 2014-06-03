var socket = io.connect()
var calendars = []
var ref_calendars = []
var positions = []
var day_start = 6;
var day_end = 22;
var day_length = day_end - day_start;
var year = 2014;

var draft_view = false;
var initial = true;


//===============
//Configuration
//===============
// var employees=[
// {key:1, label:"Jeremy Bassi"},
// {key:2, label:"Nick Ardecky"},
// {key:3, label:"Christian Carreon"},
// {key:4, label:"Cole Stipe"},
// {key:5, label:"James Lee"},
// {key:6, label:"Colby Harrison"},
// {key:7, label:"Jonathan Trinh"},
// {key:8, label:"Richard Ying"},
// {key:9, label:"Joe Kang"},
// {key:10, label:"Yutang Lin"}
// ]

var positions=[
{key:1, label:"Chef", color:"#c85248"},
{key:2, label:"Server", color:"#d5e15d"},
{key:3, label:"Bartender", color:"#63b7e6"},
{key:4, label:"Manager", color:"#95b4af"}
]

var employees = []
var shifts
var shifts_ref

var unavailability=[
  {id:1, start_date: "2014-1-1 6:0", end_date: "2014-1-1 10:0", employee_id:4, color:"#e7e7e7"},
  {id:2, start_date: "2014-1-1 15:0", end_date: "2014-1-1 22:0", employee_id:5, color:"#e7e7e7"},
  {id:3, start_date: "2014-1-1 6:0", end_date: "2014-1-1 14:0", employee_id:7, color:"#e7e7e7"},
  {id:3, start_date: "2014-1-2 6:0", end_date: "2014-1-2 14:0", employee_id:7, color:"#e7e7e7"}
]

function init()
{ //initliaze the calendar

//getshifts and shit
//get employees
socket.emit('retrieve-calendar', function(err, companyCalendars, 
  companyPositions) 
{
  if(!companyCalendars || !companyPositions) { // if the calendars are not retrieved
    console.log('(-) Calendar initialization failed.')
  } 
  else { 
    // Calendar successfully passed
    // Loop through companyCalendar and make ClientCalendars 
    // We want to create ClientCalendars because, 
    // we can't call methods with Parse objects
    for(var i = 0; i < companyCalendars.length; ++i) {
      calendars.push(new ClientCalendar(companyCalendars[i]))
      ref_calendars.push(new ClientCalendar(companyCalendars[i]))
    }

    shifts=calendars[0].days[0].shifts//TODO HARDCODED
    ref_shifts=ref_calendars[0].days[0].shifts
    calendars[0].goingToChange();
 
    for(var i = 0;i<shifts.length;i++) {
      shifts[i].start_date = correctDates(shifts[i].start_date)
      shifts[i].end_date = correctDates(shifts[i].end_date)
    }

    // Set the passed in company positions to the global array
    // positions = companyPositions

    scheduler.locale.labels.timeline_tab = "Timeline"
    scheduler.locale.labels.section_custom="Position"
    scheduler.config.details_on_create=true
    scheduler.config.details_on_dblclick=true
    scheduler.config.xml_date="%Y-%m-%d %H:%i"
    scheduler.config.wide_form = false
    scheduler.config.readonly = true
    //scheduler.config.show_loading = true;
    // scheduler.addMarkedTimespan({  
    //     days:  [3], 
    //     zones: "fullday",
    //     type:  "dhx_time_block", 
    //     css:   "gray_section", 
    //     //sections: { timeline: 2} 
    // });

    socket.emit('retrieve-all-employees', function(err, allEmployees)
    {
      if(err) {
        console.error('(-) All employees retrieval failed: ' + err.message)

      } else {
        allEmployees.sort()

        for(var i=0; i<allEmployees.length; ++i) {
          employees.push({
            "key" : i+1,
            "label" : allEmployees[i]
          })
        }

        //render the colors
        scheduler.templates.event_class = function (start, end, event) 
        {
          //event.start_date = correctDates(event.start_date);
          //event.end_date = correctDates(event.end_date);
          if (event.color == "#e7e7e7") {
            //event.text = "UNAVAILABLE";
            return "unavailability"
          }
          else if (event.type == "temp") {
            return "temp"
          } 
          else if (event.type == "old") {
            return "old"
          }
          else {
            event.color = scheduler.getColor("position_id", event.position_id);
            return "shifts"
          }
        }

        //create timeline day
        scheduler.createTimelineView({
        name: "timeline",
        x_unit:  "minute",
        x_date:  "%g %A", //24hr "%H:%i"
        x_step:  60,
        x_size: day_length+1,
        x_start: day_start,
        x_length: 24,
        y_unit:  employees,
        y_property: "employee_id",
        render:"bar",
        resize_events: false,
        fit_events: false,

        round_position: false,
        })

        //lightbox
        scheduler.config.lightbox.sections=[
        //{name:"description", height:50, map_to:"text", type:"textarea" , focus:true}, //POSTIT NOTE FEATURE?
        {name:"custom", height:23, type:"select", options:positions, map_to:"position_id" },
        //{name:"custom", height:200, options:positions, map_to:"position_id", type:"radio", vertical:true },
        //{name:"time", height:72, type:"time", map_to:"auto"}
        ]
          
        scheduler.init('scheduler',new Date(2014,0,01),"timeline") //init the calendar

        //parse events
        scheduler.parse(unavailability,"json")
        scheduler.parse(shifts,"json")

        //make unavailability read only and display none
        var un_events = document.getElementsByClassName("dhx_cal_event_line unavailability")
        for(var i = 0;i<un_events.length;i++) {
          var eventID = scheduler.getEvent(unavailability[i].id)
          eventID.readonly = true
          un_events[i].style.display="none"
        }

        //correct shifts pointer for initial published view
        var shift_events = document.getElementsByClassName("dhx_cal_event_line shifts")
        for(var i = 0;i<shift_events.length;i++) {
          shift_events[i].style.cursor="default"
        }

        //disable click for read only events
        scheduler.attachEvent("onDblClick", function (id, e)
        {
          var eventID = scheduler.getEvent(id);
          if(eventID != null)
            if(eventID.readonly)
              return false
          return true
          })

        //disable drag for read only events
        scheduler.attachEvent("onBeforeDrag", function (id, mode, e)
        {
          var eventID = scheduler.getEvent(id);
          if(eventID != null)
            if(eventID.readonly)
              return false
          return true
        })

        //hide relevant events on window resize
        scheduler.attachEvent("onSchedulerResize", function(){
          hideEvents();
        });
      }
    }) // end of socket emit for retrieve-all-employees
  }
}) // end of callback function

} // end of init()

$(document).ready(function() {
  $('#menu').sidr({
  name: 'sidr-left',
  side: 'left',
  body: '#container',
  displace: true,
  resize: true,
  speed: 100
  });
  $('#profile').sidr({
  name: 'sidr-right',
  side: 'right',
  body: '#profile',
  displace: true,
  speed: 200     
  });
  $(window).resize(function ()
  {
    $.sidr('close', 'sidr-left');
    $.sidr('close', 'sidr-right');
  });

  $(".dhx_cal_next_button").click(function()
  {
    console.log("next button")
  });

  $(".publish").click(function() //publish
  {
    while(ref_shifts.length > 0) { //clear ref_shifts
      ref_shifts.pop();
    }
    for(var i = 0;i<shifts.length;i++) {
      if(shifts[i].type == "old")
        delete shifts[i]
      delete shifts[i].type //delete temp
      ref_shifts[i] = jQuery.extend(true, {}, shifts[i]); //deep copy shifts to new ref
    }
          
    socket.emit('update-calendar', calendars, function(error)
    {
      if(error) {
        //TODO: There was error while updating calendar. Let the user know
        console.log('there was an error while updating the calendars')
      } else {
        //TODO: The update was done successfully. Let the user know
        console.log('the calendars was updated successfully')
      }
    }) // end of calendar-update
  });

  $("#draft").click(function()
  {
    if(sched_loaded) {
      if(this.style.opacity == 0.25 || !this.style.opacity) {
        if(initial) {
          $.sidr('open', 'sidr-left');
          initial = false;       
        }

        for(var i = 0;i<shifts.length;i++) {
          shifts[i].start_date = correctDates(shifts[i].start_date)
          shifts[i].end_date = correctDates(shifts[i].end_date)
        }
        scheduler.parse(shifts,"json")

        scheduler.config.readonly = false
        document.getElementById("published").style.opacity = ".25"
        this.style.opacity = "1"

        draft_view = true;
        hideEvents()

      }
    }
  });

  $("#published, .publish").click(function()
  {
    if(sched_loaded) {
      if(this.style.opacity == 0.25) {
        //$.sidr('close', 'sidr-left');

        for(var i = 0;i<ref_shifts.length;i++) {
          ref_shifts[i].start_date = correctDates(ref_shifts[i].start_date)
          ref_shifts[i].end_date = correctDates(ref_shifts[i].end_date)
          ref_shifts[i].type = "old"
        }
        scheduler.parse(ref_shifts,"json")
        scheduler.config.readonly = true
        document.getElementById("draft").style.opacity = ".25"
        this.style.opacity = "1"

      draft_view = false;
      hideEvents()
      }
    }
  });
});

//function to format the correct date when loading data
function correctDates(event_date) 
{
  var date = new Date(event_date) 
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-"
           + date.getDate() + " " + date.getHours() + ":" 
           + date.getMinutes()
}

//function to hide certain events based on published or draft view
function hideEvents()
{
  if(draft_view) {
    //console.log("show draft")
    //show unavailable
    var un_events = document.getElementsByClassName("dhx_cal_event_line unavailability")
    for(var i = 0;i<un_events.length;i++) {
      un_events[i].style.display="block"
    }

    //show newly added events
    var temp_events = document.getElementsByClassName("dhx_cal_event_line temp")
    for(var i = 0;i<temp_events.length;i++) {
      temp_events[i].style.display="block"
      temp_events[i].style.cursor="pointer"
    }

    //hide old events
    var old_events = document.getElementsByClassName("dhx_cal_event_line old")
    for(var i = 0;i<old_events.length;i++) {
      old_events[i].style.display="none"
      console.log("hide old")
    }

    //change cursor for shifts
    var shift_events = document.getElementsByClassName("dhx_cal_event_line shifts")
    for(var i = 0;i<shift_events.length;i++) {
      shift_events[i].style.cursor="pointer"
    }
  }
  else {

    //console.log("show published")
    //hide unavailable
    var un_events = document.getElementsByClassName("dhx_cal_event_line unavailability")
    for(var i = 0;i<un_events.length;i++) {
      un_events[i].style.display="none"
    }

    //hide newly added events
    var temp_events = document.getElementsByClassName("dhx_cal_event_line temp")
    for(var i = 0;i<temp_events.length;i++) {
      temp_events[i].style.display="none"
    }

    //show old events and change cursor
    var old_events = document.getElementsByClassName("dhx_cal_event_line old")
    for(var i = 0;i<old_events.length;i++) {
      old_events[i].style.display="block"
      old_events[i].style.cursor="default"
      console.log("show old")
    }


  }
}