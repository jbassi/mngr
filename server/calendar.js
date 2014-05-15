var Parse = require('parse').Parse
var Day = require('./day').Day
var Worker = require('./day').Worker

// Constructor for Calendar
var Calendar = Parse.Object.extend('Calendar', {
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

  initialize: function(attrs, options) {
    // Stores an array of all the calendar year days
    this.days = []
    this.avaliabilities = []
  },

  //TODO:
  // This function returns an array of shifts at the given day index, if 
  // day_index is null, return index of current day
  getAvaliableShiftsAtDayIndex: function(day_index) {
    var currentDay

    // Calculate the current day
    if(day_index == null) {
      var currentDay = this.getCurrentDayAsIndex()
    } else {
      currentDay = day_index
    }

    // Check array index to prevent out of bounds exception
    if(typeof days[currentDay] === 'undefined') {
      console.log('Invalid day index range.')
    } else {
      return days[currentDay].getAllShiftsAtDay()
    }

    return null
  },

  getCurrentDayAsIndex: function() {
    var currentDay = new Date()
    // TODO: Calculate and return current day as an index

  },
  getWeek: function(offset) {},
  getMonth: function(offset) {},

  // This function adds a new shift at the given day index, if day_index is null
  // create a new shift at the index of the current day
  addShiftAtDayIndex: function(day_index, employee_login, position, time_range, break_time) {
    var currentDay
    // Calculate the current day
    if(day_index == null) {
      var currentDay = this.getCurrentDayAsIndex()
    } else {
      currentDay = day_index
    }

    // Check array index to prevent out of bounds exception
    if(typeof days[currentDay] === 'undefined') {
      console.log('Invalid day index range.')
    } else {
      days[currentDay].addShift(employee_login, position, time_range, break_time)

      // Update Parse object
      this.save(null, {
        success: function() {
          this.set('Days', days)
          this.save()
        }
      })
    }
  }

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
      for(var i = 0; i < 366; i++) {
        this.days.push(new Day())
      }

      // Create availability field
      for(var i = 0; i < 7; i++) {
        this.avaliabilities.push(new Day())
      }

      // JavaScript provided Date class
      var date = new Date()

      // Set the fields
      calendar.set('Year', date.getFullYear())
      calendar.set('Days', days)
      calendar.set('Avaliability', avaliabilities)

      return calendar // return calendar object
    } // end of createCalendar

})

module.exports.Calendar = Calendar
