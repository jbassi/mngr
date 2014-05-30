var Parse = require('parse').Parse
var Day = require('./../public/javascripts/day').Day

// Constructor for Calendar
var Calendar = Parse.Object.extend('Calendar', {
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

  initialize: function(attrs, options)
  {
    // Stores an array of all the calendar year days
    this.days = []
    this.availabilities = []
  },

}, {
    // ***************** ************* ***************** // 
    // ***************** Class methods ***************** // 
    // ***************** ************* ***************** // 

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
    // This function should be called when a new Calendar is made. 
    // This function creates and initializes all the fields of 
    // a Parse Calendar object and stores the created calendar in Parse
    create: function()
    {
      var calendar = new Calendar()

      // Set ACL access permission for this object
      var calendarACL = new Parse.ACL()
      calendarACL.setRoleWriteAccess('Manager', true)
      calendarACL.setRoleReadAccess('Manager', true)
      calendarACL.setRoleReadAccess('Employee', true)
      calendar.setACL(calendarACL)

      // JavaScript provided Date class
      var currentDay = new Date()
      var year = currentDay.getFullYear()
      var isLeapYear

      if(year % 4 == 0) {
        isLeapYear = true
      } else {
        isLeapYear = false
      }

      // Create days field 
      for(var i = 0; i < 366; i++) {
        //console.log('before initialize is called')
        calendar.days.push(new Day())
      }

      // If a leap year occurs, change the value of that day to null
      if(isLeapYear) {
        calendar.days[59] = null
      }

      // Create availability field
      for(var i = 0; i < 7; i++) {
        calendar.availabilities.push(new Day())
      }

      // Set the fields
      calendar.set('Year', currentDay.getFullYear())
      calendar.set('Days', calendar.days)
      calendar.set('Availabilities', calendar.availabilities)

      return calendar // return calendar object
    } // end of createCalendar

})

module.exports.Calendar = Calendar
