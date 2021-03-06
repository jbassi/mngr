/*
 * Summary:      employee.js handles all user interaction (clicks, submits) 
 *               and page loading when the user navigates to the employee page.
 */
var is_manager = false;

var currentEmployeeId

var socket = io.connect()
var positions = []
var day_start = 6;
var day_end = 22;
var day_length = day_end - day_start - 1;
var year = 2014;
var date_step

var unavail_view = false;
var day_view = true;

var positions=[
{key:1, label:"Chef", color:"#c85248"},
{key:2, label:"Server", color:"#d5e15d"},
{key:3, label:"Bartender", color:"#63b7e6"},
{key:4, label:"Manager", color:"#95b4af"}
]

var employees = []
var unavail
var ref_shifts

var unavailability=[
  {id:1, start_date: "2014-6-7 6:0", end_date: "2014-6-7 10:0", employee_id:1, color:"#e7e7e7"},
  {id:2, start_date: "2014-6-7 15:0", end_date: "2014-6-7 22:0", employee_id:2, color:"#e7e7e7"},
  {id:3, start_date: "2014-6-7 6:0", end_date: "2014-6-7 14:0", employee_id:3, color:"#e7e7e7"},
  {id:4, start_date: "2014-6-8 6:0", end_date: "2014-6-8 14:0", employee_id:3, color:"#e7e7e7"}
]

var yaxis=[
{key:1, label:"Monday"},
{key:2, label:"Tuesday"},
{key:3, label:"Wednesday"},
{key:4, label:"Thursday"},
{key:5, label:"Friday"},
{key:6, label:"Saturday"},
{key:7, label:"Sunday"},
]

function init()
{ //initliaze the calendar

socket.emit('retrieve-current-user', function(err, currentUser) 
{
  if(!err) {
    currentEmployeeId = currentUser.id
    console.log("this is the id " + currentEmployeeId)
  } else {
    console.log('Error retrieving current user.')
  }
})

//getshifts and shit
//get employees
socket.emit('retrieve-calendar', function(err, companyCalendar,
  companyPosition) 
{
  if(!companyCalendar || !companyPosition) { // if the calendars are not retrieved
    console.log('(-) Calendar initialization failed.')
  } 
  else { 

    var today = new Date()

    calendars = new ClientCalendar(companyCalendar)
    ref_calendar = new ClientCalendar(companyCalendar)

    getShifts(today) //parse the shifts for today

    scheduler.locale.labels.timeline_tab = "Timeline"
    scheduler.locale.labels.section_custom="Position"
    scheduler.config.details_on_create=true
    scheduler.config.details_on_dblclick=true
    scheduler.config.xml_date="%Y-%m-%d %H:%i"
    scheduler.config.wide_form = false
    scheduler.config.readonly = true

    // Used to sort username in allEmployees.sort() 
    function propertyCompare(prop) {
      return function(a, b) {
          return a[prop] > b[prop]
      }
    }

    socket.emit('retrieve-all-employees', function(err, allEmployees)
    {
      if(err) {
        console.error('(-) All employees retrieval failed: ' + err.message)

      } else {
        allEmployees.sort(propertyCompare('username'))

        for(var i=0; i<allEmployees.length; ++i) {
          employees.push({
            "key" : allEmployees[i].id,
            "label" : allEmployees[i].username
          })
        }

        loadDay() //create timeline day

        //lightbox
        scheduler.config.lightbox.sections=[
        ]
          
        scheduler.init('scheduler', today,"timelineshifts") //init the calendar

        render() //render and display the calendar
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

  $(window).resize(function ()
  {
    $.sidr('close', 'sidr-left');
  });

  // $(".dhx_cal_next_button").click(function()
  // {
  //   console.log("next button")
  // });

  //show dropdown
  $("#profile").click(function()
  {
    if(document.getElementById("dropdown").style.display == "none" || !document.getElementById("dropdown").style.display)
      document.getElementById("dropdown").style.display = "block"
    else
      document.getElementById("dropdown").style.display = "none"
  })

  //logout user
  $("#d2 a").click(function()
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

  //update button
  $("#update").click(function()
  {
    //$('.dhx_cal_event_line old').remove() //remove old events div
    $.sidr('close', 'sidr-left')

    // while(ref_shifts.length > 0) { //clear ref_shifts
    //   ref_shifts.pop();
    // }
    for(var j=0; j<calendars.days.length; ++j) {

      unavail = calendars.days[j].unavailabilities

      for(var i = 0;i<unavail.length;i++) {

        var inc_start_date = unavail[i].start_date.getDate() + unavail[i].day_id - 1
        unavail[i].start_date.setDate(inc_start_date)

        var inc_end_date = unavail[i].end_date.getDate() + unavail[i].day_id - 1
        unavail[i].end_date.setDate(inc_end_date)

        unavail[i].start_date = correctDates(unavail[i].start_date)
        unavail[i].end_date = correctDates(unavail[i].end_date)
        console.log("corrected date")
      }

      var i = 0
      var length = unavail.length
      while(i<length) {
        console.log(i + " " + length)
        if(unavail[i].type == "delete") {
          console.log("delete this one " + unavail[i].text)
          unavail.splice(i,1)
          length--
        }
        else {
          console.log("now at " + unavail[i].text + "at " + i)
          //delete shifts[i].type //delete temp
          console.log("dont delete this one " + unavail[i].text)
          i++
        }
      }
    }

    ref_calendar = new ClientCalendar({
      "Days" : calendars.days,
      "Availabilities" : calendars.availabilities
    }) // update ref_calendar
    getShifts(scheduler._date) // reload shifts

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

    console.log('im suppose here all the way at the end')
    unavail_view = false

    //load published view
    scheduler.parse(ref_shifts,"json")
    scheduler.config.readonly = true
    document.getElementById("tabunavail").style.opacity = ".25"
    document.getElementById("tabshifts").style.opacity = "1"

    console.log("load shifts")
    scheduler.createTimelineView({
    name: "timelineshifts",
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
    console.log("loaded shifts")

    scheduler.init('scheduler',new Date(),"timelineshifts")
    getShifts(scheduler._date)
    render()
    console.log("render")

  }) //end of publish function

  //load draft view
  $("#tabunavail").click(function()
  {
    if(sched_loaded) {
      if(this.style.opacity == 0.25 || !this.style.opacity) {
        $.sidr('open', 'sidr-left');

        if(document.getElementById("update") != null)
          document.getElementById("update").style.display = "block"
        for(var i = 0;i<unavail.length;i++) {
          unavail[i].start_date = correctDates(unavail[i].start_date)
          unavail[i].end_date = correctDates(unavail[i].end_date)
        }
        scheduler.parse(unavail,"json")
        console.log("parsed")
        if(day_view)
          scheduler.config.readonly = false
        document.getElementById("tabshifts").style.opacity = ".25"
        this.style.opacity = "1"
        loadUnavail()

        console.log("load unavail")
        scheduler.createTimelineView({
        name: "timelineunavail",
        x_unit:  "minute",
        x_date:  "%g %A", //24hr "%H:%i"
        x_step:  60,
        x_size: day_length+1,
        x_start: day_start,
        x_length: 24,
        y_unit:  yaxis,
        y_property: "day_id",
        render:"bar",
        resize_events: false,
        fit_events: false,
        round_position: false,
        })
        console.log("loaded unavail")

        //GO TO THE MONDAY OF THE WEEK
        date_step = parseInt(scheduler._date.getDay())-1
        if(date_step == -1)
          date_step = date_step + 7
        var newdate = scheduler._date
        newdate.setDate(scheduler._date.getDate()-date_step)
        console.log("yo" + newdate)

        scheduler.init('scheduler',newdate,"timelineunavail")

        getShiftsForWeek(scheduler._date)
        render()
      }
    }
  });

  $("#tabshifts").click(function()
  {
    if(sched_loaded) {
      if(this.style.opacity == 0.25) {
        $.sidr('close', 'sidr-left');

        if(document.getElementById("update") != null)
          document.getElementById("update").style.display="none"
        document.getElementById("tabunavail").style.opacity=".25"
        this.style.opacity = "1"
        loadShifts()

        console.log("load shifts")
        scheduler.createTimelineView({
        name: "timelineshifts",
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
        console.log("loaded shifts")

        scheduler.init('scheduler',new Date(),"timelineshifts")
      }
    }
  });

  $("#day").click(function()
  {

    if(sched_loaded) {
      if(this.style.opacity == 0.25) {

        loadDay()
        if(unavail_view)
          scheduler.config.readonly = false
        document.getElementById("week").style.opacity = ".25"
        this.style.opacity = "1"

        day_view = true;
        //hideEvents()
        render()
      }
    }
  });

  $("#week").click(function()
  {
    if(sched_loaded) {
      if(this.style.opacity == 0.25 || !this.style.opacity) {
        loadWeek()
        
        scheduler.config.readonly = true
        document.getElementById("day").style.opacity = ".25"
        this.style.opacity = "1"

        day_view = false;
  
        // display schedules
        getShiftsForWeek(scheduler._date)
        render()
        //hideEvents()
      }
    }
  });
});

//function to get the shifts from database
function getShifts(today)
{
  unavail = calendars.getDay(today).unavailabilities

  //getShiftsForWeek(today)

  console.log("this is unavail " + unavail)
  ref_shifts = ref_calendar.getDay(today).shifts

  for(var i = 0;i<unavail.length;i++) {
    unavail[i].start_date = correctDates(unavail[i].start_date)
    unavail[i].end_date = correctDates(unavail[i].end_date)
  }
}

function getShiftsForWeek(today) 
{
  console.log('im here suckers')
  var week = calendars.getWeek(today)
  var ref_week = ref_calendar.getWeek(today)

  
  unavail = []
  ref_unavail = []

  for(var i=0; i<6; ++i) {
    unavail = unavail.concat(week[i].unavailabilities)
    ref_unavail = ref_unavail.concat(ref_week[i].unavailabilities)
    if(i==5) {
      for(var j = 0;j<unavail.length;j++) {
        unavail[j].start_date = correctDates(unavail[j].start_date)
        unavail[j].end_date = correctDates(unavail[j].end_date)
      }
    }
  }
}

//function to parse and render
function render()
{
  //parse events
  scheduler.parse(unavailability,"json")
  scheduler.parse(unavail,"json")

  if(!day_view) {
    //don't show unavailability
    for(i=0;i<unavailability.length;i++){
      scheduler.hideEvent(unavailability[i].id, true)
    }
  }

  if(!unavail_view){
    loadShifts()
    console.log("loaded shift view") 
  }

  else
    loadUnavail()

  //don't show deleted
  for(var i = 0;i<unavail.length;i++) {
    if(unavail[i].type == "delete") {
      scheduler.hideEvent(unavail[i].id, true)
      console.log("delete this " + unavail[i].text)
    }
  }
}

//function to load draft view
function loadUnavail()
{
  unavail_view = true;
  if(day_view) {

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
  }
  
  //don't show published shifts
  for(i=0;i<ref_shifts.length;i++){
    scheduler.hideEvent(ref_shifts[i].id, true)
  }

  //show draft shifts but not deleted ones
  for(i=0;i<unavail.length;i++){
    if(unavail[i].type != "delete") {
      scheduler.addEvent(unavail[i])

      var inc_start_date = unavail[i].start_date.getDate() - unavail[i].day_id + 1
      unavail[i].start_date.setDate(inc_start_date)

      var inc_end_date = unavail[i].end_date.getDate() - unavail[i].day_id + 1
      unavail[i].end_date.setDate(inc_end_date)
    }
  }
}

function loadShifts()
{
  unavail_view = false;
  //parse correct date
  for(var i = 0;i<ref_shifts.length;i++) {
    ref_shifts[i].start_date = correctDates(ref_shifts[i].start_date)
    ref_shifts[i].end_date = correctDates(ref_shifts[i].end_date)
    //ref_shifts[i].type = "old"
  }
  console.log(ref_shifts[0])
  scheduler.parse(ref_shifts,"json")
  scheduler.config.readonly = true

  //don't show unavailability
  for(i=0;i<unavailability.length;i++){
    scheduler.hideEvent(unavailability[i].id, true)
  }

  //don't show draft shifts
  for(i=0;i<unavail.length;i++){
    scheduler.hideEvent(unavail[i].id, true)
  }

  //show published shifts
  for(i=0;i<ref_shifts.length;i++){
    scheduler.addEvent(ref_shifts[i])
  }

  //correct shifts pointer for initial published view
  var shift_events = document.getElementsByClassName("dhx_cal_event_line shifts")
  for(var i = 0;i<shift_events.length;i++) {
    shift_events[i].style.cursor="default"
  }
}

//function to load day view
function loadDay()
{
  scheduler.createTimelineView({
  name: "timelineshifts",
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
  scheduler.init('scheduler',scheduler._date,"timelineshifts")
}

function loadWeek()
{
  //don't show unavailability for week view
  for(i=0;i<unavailability.length;i++){
    scheduler.deleteEvent(unavailability[i].id, true)
  }
  //create timeline week
  scheduler.createTimelineView({
  name: "timelineweek",
  x_unit:  "day",
  x_date:  "%l", //24hr "%H:%i"
  x_step:  1, //must be dynamic
  x_size: 7, //HARDCODED
  x_start: 0,
  x_length: 7,
  y_unit:  employees,
  y_property: "employee_id",
  render:"bar",
  resize_events: true,
  fit_events: true,
  round_position: true,
  })
  scheduler.init('scheduler', scheduler._date,"timelineweek")
}

//function to format the correct date when loading data
function correctDates(event_date) 
{
  var date = new Date(event_date) 
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-"
           + date.getDate() + " " + date.getHours() + ":" 
           + date.getMinutes()
}