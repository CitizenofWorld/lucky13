// route '/about'
// read a file named about.html
// and use it as the response
// else just respond with 'hello world'

// hint: you will need the fs module

var http = require('http');
var fs = require('fs');

var app = function(request, response) {

  var path = request.url;

  if (path === '/about') {
    fs.readFile('about.html', 'utf-8', function(err, data) {
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.write(data);
      response.end();
    })

  } else if (path === '/api') {
    // response.writeHead(200, {'Content-Type':'application/json'});
    response.json('{"test":"one"}');
    response.end();
  } else {
    response.writeHead(404)
    response.write('hello world');
    response.end();
  }

}



var server = http.createServer( app );
server.listen(8888);