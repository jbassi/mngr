var Shift = require('./shift').Shift

var Day = function() {
  // Empty shifts array to hold employee shits 
  this.shifts = []
}

Day.prototype.addShift = function() {
  var shift = new Shift(/*...*/)
  this.shifts.push(shift)
}

module.exports.Day = Day