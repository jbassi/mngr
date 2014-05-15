var Shift = require('./shift').Shift

var Day = function() {
  // Empty shifts array to hold employee shits 
  this.shifts = []
}

Day.prototype.addShift = function(employee, position, time_range, break_time) {
  var shift = new Shift(employee, position, time_range, break_time)
  this.shifts.push(shift)
}

Day.prototype.getAllShiftsAtDay = function() {
  return this.shifts
}

Day.prototype.getShiftOfWorker = function(worker_username) {

}

module.exports.Day = Day