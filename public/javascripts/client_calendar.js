var ClientCalendar = function(calendar) {
  //this.days = calendar.Days
  this.days = []
  this.availabilities = []
  this.year = calendar.Year
  // tells whether this calendar has been chagned, thus should be updated
  this.changed = false 

  // creating Days on client side
  for(var i=0; i<calendar.Days.length; ++i) {
    this.days.push(new Day(calendar.Days[i]))
  }

  // creating Availabilities on client side
  for(var i=0; i<calendar.Availabilities.length; ++i) {
    this.availabilities.push(new Day(calendar.Availabilities[i]))
  }
}

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

ClientCalendar.prototype.getWeek = function(index) {
  var day = this.indexToDate(index);
  var date = new Date(this.year, day.month, day.day);
  var week = []
  var offset = - date.getDay()

  for(var i = 0; i <= 6; i++, offset++) {
    week[i] = index + offset
  }

  return week
} // end of getWeek()

ClientCalendar.prototype.indexToDate = function(index) {
  var month = [31,29,31,30,31,30,31,31,30,31,30,31]
  var sumOfDays = 0
  var i = 0
  
  while(sumOfDays+month[i] < index ){
      sumOfDays += month[i++]
  }

  return {  
    "month" : i,
    "day" : (index - sumOfDays)
  }
} // end of indexToDate()

ClientCalendar.prototype.dateToIndex = function(month,dayOfMonth){
//var date = new Date(this.year, month, dayOfMonth)
//var index = da
} // end of dateToIndex()

//ClientCalendar.prototype.getMonth =  function(offset) {}

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

ClientCalendar.prototype.goingToChange = function() {
  this.changed = true
}

ClientCalendar.prototype.writeSomething = function() {
  console.log('im here with the new client calendar')
}
