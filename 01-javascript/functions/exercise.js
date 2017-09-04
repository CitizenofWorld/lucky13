// # The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// - Call the function three times with different sets of values.
// - Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var calculateAge = function(birthYear, currentYear) {
  var age = currentYear - birthYear;
  var ageBeforeBirthday = age - 1;
  var message = 'you are either ' + ageBeforeBirthday + ' or ' + age; 

  return message;
}