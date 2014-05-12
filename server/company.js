var Parse = require('parse').Parse
var Calendar = require('./calendar').Calendar

// Constructor for Company 
var Company = Parse.Object.extend('Company', {
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 

}, {
  // ***************** ************* ***************** // 
  // ***************** Class methods ***************** // 
  // ***************** ************* ***************** // 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  create: function(companyName) {
    var company = new Company()                

    // set ACL for company
    var acl = new Parse.ACL()
    acl.setRoleWriteAccess('Manager', true)
    acl.setRoleReadAccess('Manager', true)
    acl.setRoleReadAccess('Employee', true)
    company.setACL(acl)

    // set company fields
    company.set('name', companyName)
    var calendars = [Calendar.create()]
    company.set('calendars', calendars)
    // TODO: set fields for company

    company.save(null, {
      success: function(res) {
        console.log('[+] New object created with objectId: ' + res.id)
      },
      error: function(res, err) {
        console.log('[-] Object not created. Error: ' + err.description)
      }
    }) // save new company data to the database
    
    return company 
  } // end of createCompany

  // TODO: add other related methods for company

})

module.exports.Company = Company 
