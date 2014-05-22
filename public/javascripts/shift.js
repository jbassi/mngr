// Employee is a Parse.Worker object
// shiftInfo : JSON object 
var Shift = function(shiftInfo) {
  this.employee = shiftInfo.employeeInfo
  this.position = shiftInfo.position
  this.time_range = shiftInfo.time_range
  this.break_time = shiftInfo.break_time
}


///------------------------------------------------------------
/// Getter Methods 
///------------------------------------------------------------
Shift.prototype.getEmployee = function() {
  return this.employee
}

Shift.prototype.getPosition = function() {
  return this.position
}

Shift.prototype.getTimeRange = function() {
  return this.time_range
}

Shift.prototype.getBreakTime = function() {
  return this.break_time
}

///------------------------------------------------------------
/// Setter Methods 
///------------------------------------------------------------
Shift.prototype.setEmployee = function(employee)
{
  this.employee = employee
}
    
Shift.prototype.setPosition = function(position)
{
  this.position = position
}

Shift.prototype.setTimeRange = function(time_range)
{
  this.time_range = time_range
}

Shift.prototype.setBreakTime = function(break_time)
{
  this.break_time = break_time
}

