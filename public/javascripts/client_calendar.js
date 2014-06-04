/*
 * Summary:      ClientCalendar provides a way for the frontend to interface 
 *               with Parse and the backend.
 *
 * Functions:    getAvaliableShiftsAtDayIndex()
 *               getCurrentDayAsIndex()
 *               getWeek()
 *               indexToDate()
 *               dateToIndex()
 *               addShiftAtDayIndex()
 *               goingToChange()
 *
 * Inst. vars:   days -- an array that holds Day objects (for more information 
 *                       see Day object documentation)
 *               availabilities -- an array that holds day objects 
 *                       (for more information see Day object documentation)
 *               year -- an int; the current year
 *               changed -- boolean; a calendar instance knows if it needs to 
 *                       be updated on the backend
 *
 * Parameters:   calendar -- a Calendar object that is sent in from the backend.
 * Return:       None.
 */
var ClientCalendar = function(calendar)
{
  //this.days = calendar.Days
  this.days = [] 
  this.availabilities = [] 

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

/*
 * Summary:      getAvaliableShiftsAtDayIndex returns an array of Shift objects
 *               at the given day index. For example an index of 2 would return
 *               an array of shifts on January, 2nd.
 *
 * Parameters:   day_index -- int or null; if null, return the index of the 
 *               current calendar day determined by JavaScript.
 *
 * Return:       An array of shift objects
 */
ClientCalendar.prototype.getAvaliableShiftsAtDayIndex = function(day_index)
{
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

/*
 * Summary:      getCurrentDayAsIndex calculates the current day (determined
 *               by the JavaScript Date object) and returns the value as an int.
 *               This value can be used to directly access the array of days
 *               within a Calendar object. 
 *
 * Parameters:   None.
 *
 * Return:       The calculated index of the current day.
 *
 *               
 */
ClientCalendar.prototype.getCurrentDayAsIndex = function()
{
  //Javascript Date object
  var currentDay = new Date()

  //Get day of the month (from 1-31)
  var day = currentDay.getDate()
  //Get month of the year (from 0-11)
  var month = currentDay.getMonth()
  //Index to be returned 
  var dayIndex 
  //Leap year array of months 
  var months = [0,31,60,91,121,152,182,213,244,274,305,335]

  //Grabs amount of days for the current month
  dayIndex = months[month]

  //Day index is finalized by adding the amount of days
  dayIndex = dayIndex + day

  return dayIndex
} // end of getCurrentDayAsIndex()

/*
 * Summary:      getWeek calculates the current week block based on parameter
 *               value. If the parameter value is a Tuesday of the week,
 *               getWeek calculates the offset and always returns the start day
 *               (Sunday) of the week.
 *
 * Parameters:   None.
 *
 * Return:       An array of 7 Day objects. The 0th index of the array is 
 *               Sunday and the 6th index of the array is Saturday. 
 */
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
    if(!isLeapYear && index + offset == 59){
      week[i] = this.days[index + offset + 1]
      offset++
    }
    
    week[i] = this.days[index + offset]
  }

  return week
} // end of getWeek()

/*
 * Summary:      indexToDate converts the parameter index to a Date JSON object.
 *
 * Parameters:   index -- int; the index to be converted.
 *
 * Return:       A JSON object:
 *                 { 'month': , 'day': }
 */
ClientCalendar.prototype.indexToDate = function(index) 
{
  var month = [31,29,31,30,31,30,31,31,30,31,30,31]
  var sumOfDays = 0
  var i = 0
  
  while(sumOfDays + month[i] < index ){
    sumOfDays += month[i++]
  }

  // Month 0 is January, 1 Feb., etc.
  return {  
    "month" : i,
    "day" : (index - sumOfDays)
  }
} // end of indexToDate()

/*
 * Summary:      dateToIndex converts a JSON object to an integer.
 *
 * Parameters:   dateInfo -- a JSON object: { 'month': , 'day': }
 *
 * Return:       dayIndex -- an int; the JSON object converted to a int
 */
ClientCalendar.prototype.dateToIndex = function(dateInfo)
{
  //Inputted month 
  aMonth = dateInfo.month
  //Inputted day 
  day = dateInfo.day
  //Index to be returned 
  var dayIndex 
  //Leap year array of months 
  var months = [0,31,60,91,121,152,182,213,244,274,305,335]

  //Grabs amount of days for the current month
  for(var i = 0; i < months.length; ++i) {
    if(i == aMonth)    
      dayIndex = months[i]
  }
    
  //Day index is finalized by adding the amount of days
  dayIndex = dayIndex + day

  return dayIndex
} // end of dateToIndex()

/*
 * Summary:      addShiftAtDayIndex creates a Shift object at a given day index.
 *
 * Parameters:   day_index -- int; the index of the array where to add the shift
 *               employee -- JSON object; the employee to add
 *               position -- string; the position of the employee
 *               time_range -- JSON object; the range of times the employee 
 *                             works
 *               break_time -- JSON object; the break range of the employee
 *
 * Return:       None.
 */
ClientCalendar.prototype.addShiftAtDayIndex = function(day_index, employee, position, time_range, break_time)
{
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
      if(this.days[currentDay] == null) 
        ++currentDay;
      
      this.days[currentDay].addShift(employee, position, time_range, break_time)
    }
} // end of addShiftAtDayIndex()

/*
 * Summary:      goingToChange sets calendar instance changed boolean to true
 *
 * Parameters:   None.
 *
 * Return:       None.
 */
ClientCalendar.prototype.goingToChange = function()
{
  this.changed = true
}

ClientCalendar.prototype.getDay = function(date) {
  for(var i=0; i<this.days.length; ++i) {
    console.log('im in for loop')
    if(this.days[i].date == date.toDateString())
      return this.days[i]
  }


  console.log('im here returning new day')
  var newShifts = []

  this.days.push(new Day({
    "date" : date.toDateString(),
    "shifts" : newShifts 
  }))

  return this.days[this.days.length-1]
}

ClientCalendar.prototype.writeSomething = function()
{
  console.log('im here with the new client calendar')
}
