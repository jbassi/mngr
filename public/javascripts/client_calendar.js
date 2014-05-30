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

// This function returns a number that corresponds with a specific date
// in order to generate a day index
ClientCalendar.prototype.getCurrentDayAsIndex = function() {

  //Javascript Date object
  var currentDay = new Date()

  //Get day of the month (from 1-31)
  var day = currentDay.getDate()
  //Get month of the year (from 0-11)
  var month = currentDay.getMonth()
  //Get year (four digits)
  var year = currentDay.getFullYear()
  //Index to be returned 
  var dayIndex 
  //Leap year array of months 
  var months = [0,31,60,91,121,152,182,213,244,274,305,335]

  //Grabs amount of days for the current month
  for(var i = 0; i < months.length; ++i) {
    if(i == month) {
      dayIndex = months[i]  
    }
  }

  //Day index is finalized by adding the amount of days
  dayIndex = dayIndex + day

  return dayIndex

} // end of getCurrentDayAsIndex()

// Returns an array of Days starting, starting from sunday
// to saturday. 0 = Sun., 1 = Mon., ..., 6 = Sat.
ClientCalendar.prototype.getWeek = function(index) 
{
  
  var isLeapYear = false
  var day = this.indexToDate(index);
  var date = new Date(this.year, day.month, day.day);
  var week = []
  var offset = - date.getDay()

  //if a leap year, set isLeapYear to true :0
  if( this.year % 4 == 0){
    isLeapYear = true  
  }

  //This for loop will store the array of days
  for(var i = 0; i <= 6; i++, offset++) {

    //skips the 60th(29th of Feb) index on non-leap year years
    if(!isLeapYear && index + offset == 60){
      week[i] = this.days[index + offset + 1]
      offset++
    }
    
    week[i] = this.days[index + offset]
  }

  return week
} // end of getWeek()

//returns the day and month of an index value
ClientCalendar.prototype.indexToDate = function(index) 
{
 
  var month = [31,29,31,30,31,30,31,31,30,31,30,31]
  var sumOfDays = 0
  var i = 0
  
  while(sumOfDays + month[i] < index ){
      sumOfDays += month[i++]
  }

  //Month 0 is January, 1 Feb., etc.
  return {  
    "month" : i,
    "day" : (index - sumOfDays)
  }
} // end of indexToDate()


ClientCalendar.prototype.dateToIndex = function(month,dayOfMonth){

  //Inputted month 
  aMonth = month 
  //Inputted day 
  day = dayOfMonth
  //Index to be returned 
  var dayIndex 
  //Leap year array of months 
  var months = [0,31,60,91,121,152,182,213,244,274,305,335]

  //Grabs amount of days for the current month
  for(var i = 0; i < months.length; ++i) {
    if(i == aMonth) {   
      dayIndex = months[i]
    }   
  }
    
  //Day index is finalized by adding the amount of days
  dayIndex = dayIndex + day

  return dayIndex
} // end of dateToIndex()

//ClientCalendar.prototype.getMonth =  function(offset) {}

// This function adds a new shift at the given day index, if day_index is null
// create a new shift at the index of the current day
ClientCalendar.prototype.addShiftAtDayIndex = function(day_index, employee, position, time_range, break_time) {
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
      // Checks if there is an extra day for leap year
      // If its not a leap year, skip over the empty day in the array
      if(this.days[currentDay] == null) {
        ++currentDay;
      }
      this.days[currentDay].addShift(employee, position, time_range, break_time)
    }
} // end of addShiftAtDayIndex()

ClientCalendar.prototype.goingToChange = function() {
  this.changed = true
}

ClientCalendar.prototype.writeSomething = function() {
  console.log('im here with the new client calendar')
}
