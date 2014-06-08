var Parse = require('parse').Parse
var Calendar = require('./calendar').Calendar

// Constructor for Company 
var Company = Parse.Object.extend('Company', {
  // ***************** **************** ***************** // 
  // ***************** Instance methods ***************** // 
  // ***************** **************** ***************** // 
  
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  update: function(companyConfig, callback)
  {
    this.set('name', companyConfig.name)
    this.set('phoneNumber', companyConfig.phoneNumber) 
    this.set('companyInfo', companyConfig.companyInfo)

    this.save(null, {
      success: function(res)
      {
        console.log('[+] Company\'s information have been updated')
        callback(null) // this callback is called by whoever create a new company
      },

      error: function(res, error)
      {
        console.log('[-] Company is not updated. Error: ' + error.message)
        callback(error) // this callback is called by whoever create a new company

      }
    }) // end of save()
  }
}, {
  // ***************** ************* ***************** // 
  // ***************** Class methods ***************** // 
  // ***************** ************* ***************** // 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ // 
  create: function(companyName, callback)
  {
    var company = new Company()                

    // set ACL for company
    var acl = new Parse.ACL()
    acl.setRoleWriteAccess('Manager', true)
    acl.setRoleReadAccess('Manager', true)
    acl.setRoleReadAccess('Employee', true)
    company.setACL(acl)

    // set company fields
    company.set('name', companyName)
    company.set('phoneNumber', "")

    var calendar = Calendar.create()
    var companyInfo = {
      "hours" : {"day_start" : 6, "day_end" : 22},
      "positions" : []
    }
    company.set('calendars', calendar)
    company.set('companyInfo', companyInfo)

    company.save(null, {
      success: function(res)
      {
        console.log('[+] New Company ' + companyName + ' created with objectId: ' + res.id)
        callback(null) // this callback is called by whoever create a new company
      },

      error: function(res, error)
      {
        console.log('[-] Company not created. Error: ' + error.message)
        callback(error) // this callback is called by whoever create a new company

      }
    }) // save new company data to the database
    
    return company 
  } // end of createCompany
}) // end of company object definition

module.exports.Company = Company 
