var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	transactions = require('./routes/transactions'),
	mongo = require('mongodb');


app.use(express.logger('dev'));
app.use(express.bodyParser());

app.get('/', function(req, res){
	res.send('You made it here!');
})
app.get('/transactions', transactions.findAll);

server.listen(3000);
console.log( "Express server is listening on port %d in %s mode", server.address().port, app.settings.env);