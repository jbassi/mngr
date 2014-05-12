var Parse = require('parse').Parse
var Day = require('./day').Day

// Constructor for Calendar
var Calendar = Parse.Object.extend('Calendar', {
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

}, {
  // ***************** ************* ***************** // 
  // ***************** Class methods ***************** // 
  // ***************** ************* ***************** // 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  // This function should be called when a new Calendar is made. 
  // This function creates and initializes all the fields of 
  // a Parse Calendar object and stores the created calendar in Parse
  create: function() {
    var calendar = new Calendar()

    // Set ACL access permission for this object
    var calendarACL = new Parse.ACL()
    calendarACL.setRoleWriteAccess('Manager', true)
    calendarACL.setRoleReadAccess('Manager', true)
    calendarACL.setRoleReadAccess('Employee', true)
    calendar.setACL(calendarACL)

    // Create days field 
    var days = []
    for(var i = 0; i < 366; i++) {
      days.push(new Day())
    }

    // Create availability field
    var avaliabilities = []
    for(var i = 0; i < 7; i++) {
      avaliabilities.push(new Day())
    }

    // JavaScript provided Date class
    var date = new Date()

    // Set the fields
    calendar.set('Year', date.getFullYear())
    calendar.set('Days', days)
    calendar.set('Avaliability', avaliabilities)

    return calendar // return calendar object
  } // end of createCalendar

  //TODO: add other related methods for calendar

})

module.exports.Calendar = Calendar
