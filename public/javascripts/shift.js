/*
 * Summary:      Shift is used by Day objects and encapsulates Employee 
 *               information. This constructor takes in a shift info JSON 
 *               object.
 *
 * Functions:    getEmployee()
 *               getPosition()
 *               getEvents()
 *
 *               setEmployee()
 *               setPosition()
 *               setEvents()
 *
 * Inst. vars:   employee -- Parse.Worker object that has employee informaiton
 *               position -- string; the position assigned by the manager
 *               events -- array of JSON events; 
 *
 * Parameters:   shiftInfo -- JSON; {"employee":,"position":,"events":}
 *
 * Return:       None.
 */
var Shift = function(shiftInfo)
{
  this.id = shiftInfo.id
  this.text = shiftInfo.text
  this.start_date = shiftInfo.start_date
  this.end_date = shiftInfo.end_date
  this.employee_id = shiftInfo.employee_id
  this.position_id = shiftInfo.position_id
  this.color = shiftInfo.color
  if(typeof shiftInfo.day_id !== 'undefined')
    this.day_id = shiftInfo.day_id
}

/*
/*
 * Summary:      getEmployee returns the current Parse.Worker object.
 *
 * Parameters:   None.
 *
 * Return:       The current Parse.Worker object.
 */
/*
Shift.prototype.getEmployee = function()
{
  return this.employee
}

/*
 * Summary:      getPosition returns the current employees position.
 *
 * Parameters:   None.
 *
 * Return:       The current workers position as a string.
 */
/*
Shift.prototype.getPosition = function()
{
  return this.position
}

/*
 * Summary:      getEvents returns array of events for calendar
 *
 * Parameters:   None.
 *
 * Return:       An erray events 
 */
/*
Shift.prototype.getEvents = function()
{
  return this.events
}

/*
 * Summary:      setEmployee sets the Parse.Worker object.
 *
 * Parameters:   employee -- Parse.Worker; the object to set.
 *
 * Return:       None.
 */
/*
Shift.prototype.setEmployee = function(employee)
{
  this.employee = employee
}
    
/*
 * Summary:      setPosition sets the current employees position.
 *
 * Parameters:   position -- string; the position to set.
 *
 * Return:       None.
 */
/*
Shift.prototype.setPosition = function(position)
{
  this.position = position
}

/*
 * Summary:      setEvents sets the current events with new events 
 *
 * Parameters:   events -- array of events 
 *
 * Return:       None.
 */
/*
Shift.prototype.setEvents = function(events)
{
  this.events = events
}
*/
