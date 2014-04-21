
/*
 * Handles all app page routing.
 */

module.exports = function(app) {

  // Get home page
  app.get('/', function(req, res) {
    res.render('index', { title: 'Mngr'})
  })

  // Get sign up page
  app.get('/signup', function(req, res) {
    res.render('signup')
  })

  app.get('/home', function(req, res) {
    res.render('home')
  })

}