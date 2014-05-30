// Constructor for day
var Day = function(day)
{

  if(day === undefined) { 
    // Empty shifts array to hold employee shifts 
    this.shifts = []

  } else { // Constructor for day called by ClientCalendar
    this.shifts = []  

    // loop through all the shifts to create new javascript objects on client side
    for(var i=0; i<day.shifts.length; ++i) {
      this.shifts.push(new Shift(day.shifts[i])) 
    }
  }
} // end constructor

Day.prototype.addShift = function(employee, position, time_range, break_time)
{
  var shiftInfo = {
    "employeeInfo" : employee,
    "position" : position, 
    "time_range" : time_range,
    "break_time" : break_time
  }

  this.shifts.push(new Shift(shiftInfo))
}

Day.prototype.getAllShiftsAtDay = function()
{
  return this.shifts
}

module.exports.Day = Day
