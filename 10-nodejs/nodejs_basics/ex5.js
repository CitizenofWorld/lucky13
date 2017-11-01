var fs = require('fs');

// callback signature - error first
fs.readFile('ex1.js', function(err, data) {
  console.log( data.toString() );
});

console.log('end of ex5.js file here !!!!!!');