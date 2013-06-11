var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app);

server.listen(3000);
console.log( "Express server is listening on port %d in %s mode", server.address().port, app.settings.env);