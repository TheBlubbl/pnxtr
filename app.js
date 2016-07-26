var express = require('express');
var app = express();

//set up ejs(templating engine)
app.set('view engine', 'ejs');

//setup static files
app.use(express.static('./public'));

//setting up the index page
app.get('/', function(req, res){
    res.render('index');
});

//setting up the about page
app.get('/about', function(req, res){
    res.render('about');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/help', function(req, res){
    res.render('help');
});

app.listen(80);
console.log("listening to port 80");
