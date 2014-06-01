/*
 * Summary:      Shift is used by Day objects and encapsulates Employee 
 *               information. This constructor takes in a shift info JSON 
 *               object.
 *
 * Functions:    getEmployee()
 *               getPosition()
 *               getShiftTimeRange()
 *               getBreakTime()
 *
 *               setEmployee()
 *               setPosition()
 *               setTimeRange()
 *               setBreakTime()
 *
 * Inst. vars:   employee -- Parse.Worker object that has employee informaiton
 *               position -- string; the position assigned by the manager
 *               time_range -- array JSON; [{"start":, "end":}]
 *               break_time -- JSON; {"start":, "end":}
 *
 * Parameters:   shiftInfo -- JSON;
 *                                    { "employee":,"position":,"time_range":,
 *                                      "break_time": }
 * Return:       None.
 */
var Shift = function(shiftInfo)
{
  this.employee = shiftInfo.employee
  this.position = shiftInfo.position
  this.time_range = shiftInfo.time_range
  this.break_time = shiftInfo.break_time
}

/*
 * Summary:      getEmployee returns the current Parse.Worker object.
 *
 * Parameters:   None.
 *
 * Return:       The current Parse.Worker object.
 */
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
Shift.prototype.getPosition = function()
{
  return this.position
}

/*
 * Summary:      getShiftTimeRange returns the current workers Shift time range.
 *
 * Parameters:   None.
 *
 * Return:       An array of JSON time ranges; [{"start":, "end":}]
 */
Shift.prototype.getShiftTimeRange = function()
{
  return this.time_range
}

/*
 * Summary:      getBreakTime returns the current workers break time range.
 *
 * Parameters:   None.
 *
 * Return:       A JSON time range; {"start":, "end":}
 */
Shift.prototype.getBreakTime = function()
{
  return this.break_time
}

/*
 * Summary:      setEmployee sets the Parse.Worker object.
 *
 * Parameters:   employee -- Parse.Worker; the object to set.
 *
 * Return:       None.
 */
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
Shift.prototype.setPosition = function(position)
{
  this.position = position
}

/*
 * Summary:      setTimeRange sets the current employees time range JSON.
 *
 * Parameters:   time_range -- JSON; the time range to set; [{"start":, "end":}]
 *
 * Return:       None.
 */
Shift.prototype.setTimeRange = function(time_range)
{
  this.time_range = time_range
}

/*
 * Summary:      setBreakTime sets the current employees break time range.
 *
 * Parameters:   break_time -- JSON; the time range to set; {"start":, "end":}
 *
 * Return:       None.
 */
Shift.prototype.setBreakTime = function(break_time)
{
  this.break_time = break_time
}
