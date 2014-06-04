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
 *
 * Return:       None.
 */
var Day = function(day)
{
 this.date = '' 
 this.shifts = []  

 if(day !== null && typeof day !== 'undefined') {
    this.date = day.date

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
 * Parameters:   shiftInfo -- JSON; used in scheduler  
 *
 * Return:       None.
 */
Day.prototype.addShift = function(shiftInfo)
{
   //this.shifts.push(new Shift(shiftInfo))
   this.shifts.push(shiftInfo)
}

/*
 * Summary:      editShiftAtIndex edits the Shift at the given shifts array
 *               index with the new JSON info passed into the second parameter.
 *
 * Parameters:   shiftIndex -- int; the shift[] array index of the employee to 
 *                             change  
 *
 *               newInfo -- JSON; { "employee":,"position":,"events":}
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
 * Summary:      deleteShift deletes a Shift passed id
 *
 *
 * Parameters:   id -- int; id is unique to each shifts
 *
 *
 * Return:       None.
 */
Day.prototype.deleteShift = function(id)
{
  // loop through shift to find the one with the passed id
  var deleted = false
  var i = 0

  while(!deleted && i<this.shifts.length) 
  {
    if(this.shifts[i].id == id) {
      this.shifts.splice(i, 1)
      deleted = true 
    }
    i++
  }
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
