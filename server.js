var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var todos = [];
var todoNextId=1;
app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

app.use(bodyParser.json());


// GET /todos/:id

app.get('/todos/:id',function(req,res){
var todoId= parseInt(req.params.id,10);
var matchedId;
todos.forEach(function(id){
	var x = id.id;
	if(todoId == x ){
		matchedId=x;
	}

});

if(matchedId){
	res.json(matchedId);
}
else{
	res.status(404).send();
}

		
});


app.post('/todos',function (req,res){
	var body = req.body;
	console.log('description '+ body.description);
	res.json(body);
})


app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});