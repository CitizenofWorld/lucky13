var express = require('express');
var app = express();
const PORT = 8888;
var logger = require('./logger');
var request = require('request');

app.set('views', './views');
app.set('view engine', 'ejs');


var pagesController = {
  home: function(request, response) {
    response.render('index');
  }
}
 // ||
app.use(logger);
 // ||
 // \/
app.use(express.static('public')); 
 // ||
 // \/
app.get('/', pagesController.home);

app.get('/api/info', function(request, response) {
  response.json({ version: 1 });
})

app.get('/about', function(request, response) {
  response.send('about page');
})
 // ||
 // \/
app.get('/details', function(req, response) {

  const url = `http://omdbapi.com/?apikey=2f6435d9&t=${req.query.title}`;

  request({
    url: url,
    json: true
  }, function(err, responseFromOMDB, movie) {
    // takes 1 second
    response.render('details', { movie: movie })
  })
  // response.render('details', { title: request.query.title });
});



app.listen(PORT);


