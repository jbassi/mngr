// Employee is a Parse.Worker object
// shiftInfo : JSON object 
var Shift = function(shiftInfo) {
  this.employee_username = shiftInfo.employeeInfo.username
  this.position = shiftInfo.position
  this.time_range = shiftInfo.time_range
  this.break_time = shiftInfo.break_time
}


Shift.prototype.getEmployee = function() {
  return this.employee_username
}

Shift.prototype.getPosition = function() {
  return this.position
}

Shift.prototype.getShiftTimeRange = function() {
  return this.time_range
}

Shift.prototype.getShiftBreakTime = function() {
  return this.break_time
}
