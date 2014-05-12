test: dependencies
	@cat .callHelp 
	node testApp 

node: app.js clients dependencies 
	node app

dependencies: server routes

server: server/database-provider.js

routes: routes/router.js

clients: public/javascripts/client.js



