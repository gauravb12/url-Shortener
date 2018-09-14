var express = require('express')
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('assets'));

app.get('/', function(req, res){
	res.sendFile(__dirname+'/assets/index.html');
});

	app.post('/shorten', function(req, res){
	console.log(JSON.stringify(req.body));
	fs.readFile(__dirname+'/assets/urls.json', function(err, data1){
		var data = JSON.parse(data1);
		var i;
		for(i=0; i<data.length; i++){
			if(data[i].url == req.body.urlInput){
				return res.send(data[i].shorturl);
			}
		}
		if(i==data.length){
			var newurl = parseInt((data[i-1].shorturl).slice(-4))+1;
			var shrturl = 'http://localhost:3000/s/' + newurl;
			var newData = {url: req.body.urlInput, shorturl: shrturl};
			data.push(newData);
			fs.writeFile(__dirname+'/assets/urls.json', JSON.stringify(data), function(err){
				if(err)
					console.log(err);
				else{
					console.log('URL shortened');
					res.send(shrturl);
				}
			})
		}
	});
});	

app.get('/s/:shorturl', function(req, res){
	fs.readFile(__dirname+'/assets/urls.json', function(err, data1){
		var data = JSON.parse(data1);
		var ipurl = 'http://localhost:3000/s/' + req.params.shorturl;
		var i;
		for(i=0; i<data.length; i++){
			if(data[i].shorturl == ipurl){
				return res.redirect(data[i].url);
			}
		}
		if(i==data.length){
			res.sendFile(__dirname+'/assets/error.html');
		}
	});
});


app.listen(3000, function(req, res){
	console.log('Listening at PORT 3000')
});