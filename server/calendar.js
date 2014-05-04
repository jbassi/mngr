var Parse = require('parse').Parse
var Day = require('./day').Day

// Constructor for Calendar
var Calendar = Parse.Object.extend('Calendar', {
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

}, {
  // ***************** ************* ***************** // 
  // ***************** Class methods ***************** // 
  // ***************** ************* ***************** // 

  // This function should be called when a new Manager is created. This function
  // creates and initializes all the fields of a Parse Calendar object and 
  // stores the created calendar in Parse
  createCalendar: function() {
    var calendar = new Calendar()
    var date = new Date()

    var days = []
    for(var i = 0; i < 366; i++) {
      days.push(new Day())
    }

    var avaliabilities = []
    for(var i = 0; i < 7; i++) {
      avaliabilities.push(new Day())
    }

    calendar.set('Year', date.getFullYear())
    calendar.set('Days', days)
    calendar.set('Avaliability', avaliabilities)

    calendar.save(null, {
      success: function(res) {
        console.log('[+] New object created with objectId: ' + res.id)
      },
      error: function(res, err) {
        console.log('[-] Object not created. Error: ' + err.description)
      }
    })
  }

})

module.exports.Calendar = Calendar