var ClientCalendar = function(calendar) {
  //this.days = calendar.Days
  this.days = []
  this.availabilities = []

  console.log('trying to create days')

  // creating Days on client side
  for(var i=0; i<calendar.Days.length; ++i) {
    this.days.push(new Day(calendar.Days[i]))
  }

  // creating Availabilities on client side
  /*
  for(var i=0; i<calendar.Availabilities.length; ++i) {
    this.availabilities.push(new Day(calendar.Availabilities[i]))
  }
  */

  this.year = calendar.Year
}

//TODO:
// This function returns an array of shifts at the given day index, if 
// day_index is null, return index of current day
ClientCalendar.prototype.getAvaliableShiftsAtDayIndex = function(day_index) {
    var currentDay

    // Calculate the current day
    if(day_index == null) {
      var currentDay = this.getCurrentDayAsIndex()
    } else {
    console.log('setting currentday')
      currentDay = day_index
    }

    // Check array index to prevent out of bounds exception
    if(typeof this.days[currentDay] === 'undefined') {
      console.log('Invalid day index range.')
    } else {
    console.log('getting all shifts for the day')
      return this.days[currentDay].getAllShiftsAtDay()
    console.log('after getting all shifts for the day')
    }

    return null
}

ClientCalendar.prototype.getCurrentDayAsIndex = function() {
    var currentDay = new Date()
    console.log('testing getCurrentDayAsIndex')
    // TODO: Calculate and return current day as an index

} // end of getCurrentDayAsIndex()

ClientCalendar.prototype.getWeek = function(offset) {}
ClientCalendar.prototype.getMonth =  function(offset) {}

// This function adds a new shift at the given day index, if day_index is null
// create a new shift at the index of the current day
ClientCalendar.prototype.addShiftAtDayIndex = function(day_index, employee_login, position, time_range, break_time) {
    var currentDay

    // Calculate the current day
    if(day_index == null) {
      var currentDay = this.getCurrentDayAsIndex()
    } else {
      currentDay = day_index
    }

    // Check array index to prevent out of bounds exception
    if(typeof this.days[currentDay] === 'undefined') {
      console.log('Invalid day index range.')
    } else {
      this.days[currentDay].addShift(employee_login, position, time_range, break_time)

    }
} // end of addShiftAtDayIndex()


ClientCalendar.prototype.writeSomething = function() {
  console.log('im here with the new client calendar')
}
