var Worker = require('./worker').Worker

// Employee is a Parse.Worker object
var Shift = function(employee_username, position, time_range, break_time) {
  this.employee_username = employee_username
  this.position = position
  this.time_range = time_range
  this.break_time = break_time
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