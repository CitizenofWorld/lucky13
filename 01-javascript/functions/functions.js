// 23 celsius
// f = (c * (9 / 5)) + 32

// repeatability - reuse - flexible
// readability
// scalability

var magicNumber = 32;
                                // parameter
var celsiusToFahrenheit = function(celsius) {
  var fahrenheit = celsius * ( 9 / 5 ) + magicNumber;
  // console.log(fahrenheit);
  return fahrenheit;
}

var todaysTemp = 23;
                                    // argument
var fahrenheit = celsiusToFahrenheit( todaysTemp );

 
