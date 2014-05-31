
/*
 * Handles all app page routing.
 */

module.exports = function(app) {

  // Get index page
  app.get('/', function(req, res) {
    res.render('index', { title: 'Mngr'})
  })

  // Get sign up page
  app.get('/signup', function(req, res) {
    res.render('signup', { title: 'Mngr'})
  })

  // Get post sign up page
  app.get('/intro', function(req, res) {
    res.render('intro', { title: 'Mngr'})
  })

  // Get home page
  app.get('/home', function(req, res) {
    res.render('home', { title: 'Mngr'})
  })

  app.get('/about', function(req, res) {
    res.render('about', { title: 'Mngr'})
  })

}