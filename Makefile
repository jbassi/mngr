node: app.js server routes clients
	node app

test: server routes
	node testApp 

server: server/database-provider.js

routes: routes/router.js

clients: public/javascripts/client.js



