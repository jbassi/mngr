var socket = io.connect()
var calendars = []
var positions = []

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

var unavailability=[
  {id:1, start_date: "2014-1-1 6:0", end_date: "2014-1-1 10:0", employee_id:4, color:"#e7e7e7"},
  {id:2, start_date: "2014-1-1 15:0", end_date: "2014-1-1 22:0", employee_id:5, color:"#e7e7e7"},
  {id:3, start_date: "2014-1-1 6:0", end_date: "2014-1-1 14:0", employee_id:7, color:"#e7e7e7"}
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
    }

    shifts=calendars[0].days[0].shifts//TODO HARDCODED
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
        x_step:  60, //must be dynamic
        x_size: 17, //HARDCODED
        x_start: 6,
        x_length: 24,
        y_unit:  employees,
        y_property: "employee_id",
        render:"bar",
        resize_events: false,
        fit_events: false,
        round_position: false,
        })

        // //create timeline week
        // scheduler.createTimelineView({
        // name: "timeline",
        // x_unit:  "day",
        // x_date:  "%l", //24hr "%H:%i"
        // x_step:  1, //must be dynamic
        // x_size: 7, //HARDCODED
        // x_start: 0,
        // x_length: 7,
        // y_unit:  employees,
        // y_property: "employee_id",
        // render:"bar",
        // resize_events: true,
        // fit_events: true,
        // round_position: true,
        // })

        //lightbox
        scheduler.config.lightbox.sections=[
        //{name:"description", height:50, map_to:"text", type:"textarea" , focus:true}, //POSTIT NOTE FEATURE?
        {name:"custom", height:23, type:"select", options:positions, map_to:"position_id" },
        //{name:"custom", height:200, options:positions, map_to:"position_id", type:"radio", vertical:true },
        //{name:"time", height:72, type:"time", map_to:"auto"}
        ]
          
        scheduler.init('scheduler_here',new Date(2014,0,01),"timeline") //init the calendar

        //parse events
        scheduler.parse(unavailability,"json")
        scheduler.parse(shifts,"json")

        //make unavailability read only
        for(var i = 0;i<unavailability.length;i++) {
          var eventID = scheduler.getEvent(unavailability[i].id)
          eventID.readonly = true
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

        //drag boundaries
        scheduler.attachEvent("onBeforeEventChanged", function(ev, e, is_new)
        {
          //any custom logic here
          return true
        })
        }
    }) // end of socket emit for retrieve-all-employees
  }
}) // end of callback function
} // end of init()

function correctDates(event_date) 
{
  var date = new Date(event_date) 
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-"
           + date.getDate() + " " + date.getHours() + ":" 
           + date.getMinutes()

}


