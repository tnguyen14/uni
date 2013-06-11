var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	transactions = require('./routes/transactions'),
	mongo = require('mongodb'),
	MongoClient = mongo.MongoClient;


app.use(express.logger('dev'));
app.use(express.bodyParser());

MongoClient.connect(process.env.MONGOLAB_URI, function(err, db){
	if (err) throw err;
	console.log("Connected to Database " + db);
});

app.get('/', function(req, res){
	res.send('You made it here!');
})
app.get('/transactions', transactions.findAll);

server.listen(3000);
console.log( "Express server is listening on port %d in %s mode", server.address().port, app.settings.env);