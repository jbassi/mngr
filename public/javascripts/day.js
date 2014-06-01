/*
 * Summary:      Day is used by Calendar objects and encapsulates Shift objects.
 *               This constructor takes in a Day object and loops through the 
 *               Shifts in the passed in Day object, pushing each shift to an
 *               array for the client to use.
 *
 * Functions:    addShift()
 *               editShiftAtIndex()
 *               deleteShiftAtIndex()
 *               getAllShiftsAtDay()
 *
 * Inst. vars:   shifts -- an array of Shift objects (for more information 
 *                       see Shift object documentation)
 *
 * Parameters:   day -- a Day object
 * Return:       None.
 */
var Day = function(day)
{
 this.shifts = []  
 if(day !== null && typeof day !== 'undefined') {
    // loop through all the shifts and create new javascript 
    // objects on client side
    for(var i=0; i<day.shifts.length; ++i) {
      if(day.shifts[i] !== null) {
        this.shifts.push(new Shift(day.shifts[i])) 
      }
    }
  }

}

/*
 * Summary:      addShift creates a new Shift object from the passed in JSON 
 *               and pushes the newly created object to the array of Shifts.
 *
 * Parameters:   employeeShiftInfo -- JSON;
 *                                    { "employee":,"position":,"time_range":,
 *                                      "break_time": }
 *
 * Return:       None.
 */
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

/*
 * Summary:      editShiftAtIndex edits the Shift at the given shifts array
 *               index with the new JSON info passed into the second parameter.
 *
 * Parameters:   shiftIndex -- int; the shift[] array index of the employee to 
 *                             change  
 *
 *               newInfo -- JSON; { "employee":,"position":,"time_range":,
 *                                  "break_time": }
 *
 * Return:       None.
 */
Day.prototype.editShiftAtIndex = function(shiftIndex, newInfo)
{
  var shiftToEdit = this.shifts[shiftIndex]

  // if the fields in newInfo are not null, update the corresponding fields
  if(typeof newInfo.employee !== 'undefined') {
    shiftToEdit.setEmployee(newInfo.employee)
  }

  if(typeof newInfo.position !== 'undefined') {
    shiftToEdit.setPosition(newInfo.position)
  }

  if(typeof newInfo.time_range !== 'undefined') {
    shiftToEdit.setTimeRange(newInfo.time_range)
  }

  if(typeof newInfo.break_time !== 'undefined') {
    shiftToEdit.setBreakTime(newInfo.break_time)
  }
}

/*
 * Summary:      deleteShiftAtIndex deletes a Shift at the given shifts array 
 *               index
 *
 * Parameters:   shiftIndex -- int; the shift[] array index of the employee to 
 *                             remove
 *
 *
 * Return:       None.
 */
Day.prototype.deleteShiftAtIndex = function(shiftIndex)
{
  delete this.shifts[shiftIndex]
}

/*
 * Summary:      getAllShiftsAtDay returns an array of Shift objects at this 
 *               given Day instance
 *
 * Parameters:   None.
 *
 * Return:       An array of Shift objects.
 */
Day.prototype.getAllShiftsAtDay = function()
{
  return this.shifts
}

if (typeof module !== 'undefined') { // only exports Day if module is defined
  module.exports.Day = Day
}
