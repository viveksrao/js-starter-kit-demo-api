var express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port',(process.env.PORT || 5000));

app.get('/', function(request, response){
  response.send('Hello World!!!');
});

app.get('/users', function(req, res){
	// Hard coding for simplicity. Pretend this hits a real database.
	res.json([
		{"id":1,"firstName":"Bobby","lastName":"Doe","email":"bobby@gmail.com"},
		{"id":2,"firstName":"Terry","lastName":"West","email":"terry@outlook.com"},
		{"id":3,"firstName":"Alana","lastName":"Lee","email":"alana@yahoo.com"}
	]);
});

app.listen(app.get('port'), function(){
	console.log('Node app is running at localhost:' + app.get('port'));
});
