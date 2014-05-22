// Constructor for day
var Day = function(day)
{
  this.shifts = []  
  if(day !== null && typeof day !== 'undefined')  
    // loop through all the shifts to create new javascript objects on client side
    for(var i=0; i<day.shifts.length; ++i) {
      if(day.shifts[i] !== null)
        this.shifts.push(new Shift(day.shifts[i])) 
    }
} // end constructor


//Day.prototype.addShift = function(employee, position, time_range, break_time)
Day.prototype.addShift = function(employeeShiftInfo)
{
  var shiftInfo = {
    "employee" : employeeShiftInfo.employee,
    "position" : employeeShiftInfo.position, 
    "time_range" : employeeShiftInfo.time_range,
    "break_time" : employeeShiftInfo.break_time
  }

  this.shifts.push(new Shift(shiftInfo))
}

Day.prototype.editShift = function(shiftIndex, newInfo)
{
  var shiftToEdit = this.shifts[shiftIndex]

  // receive JSON object newInfo
  // if the fields in newInfo are not null, update the corresponding fields
  if(typeof newInfo.employee !== 'undefined')
    shiftToEdit.setEmployee(newInfo.employee)

  if(typeof newInfo.position !== 'undefined')
    shiftToEdit.setPosition(newInfo.position)

  if(typeof newInfo.time_range !== 'undefined')
    shiftToEdit.setTimeRange(newInfo.time_range)

  if(typeof newInfo.break_time !== 'undefined')
    shiftToEdit.setBreakTime(newInfo.break_time)
}

Day.prototype.deleteShift = function(shiftIndex)
{
  delete this.shifts[shiftIndex]
}

Day.prototype.getAllShiftsAtDay = function()
{
  return this.shifts
}

if (typeof module !== 'undefined') { // only exports Day if module is defined
  module.exports.Day = Day
}

