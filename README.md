Sample node.js app for CSE110.

Make sure dependencies are installed:
<br>$ npm install -g express 
<br>$ npm install socket.io 
<br>$ npm install mongodb

In cloned folder: 
<br>
$ npm install

Start mongo database: In a seperate terminal window run: 
<br>$ mongod 

In another terminal window run: 
<br>$ mongo 

Should connect to test database. Change from test database to guestlist database.
<br>$ use [name of database] 
<br>$ use guestlist

Items can now be added to the database. After successful connection the app 
checks for a test response. Add this test response to the database with: 
<br>$ db.guestlist.insert({test:'response'})

Run the app with: 
<br>$ node app

To check if an item was added to the database: 
<br>$ db.guestlist.find()
