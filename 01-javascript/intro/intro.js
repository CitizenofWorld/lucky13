console.log('hello javascript');
console.log('hello again');
console.log('goodbye');

var age = 15;

if (age < 18) {
  console.log('come back later');
} else {
  console.log('party till you drop');
}

var year = 2017;

if (year === 2017) {
  console.log('present');
} else if (year < 2017) {
  console.log('past');
} else {
  console.log('future');
}
// truthy and falsey
// values that are falsey, false, empty string, the number 0, undefined, null, NaN

var isLucky13Awesome = true;

if (isLucky13Awesome) {
  console.log('wdi13 rocks');
}

var name = '';

if (name) {
  console.log('hello ' + name);
}

var points = 0;
if (points) {
  console.log(points);
}

var firstname;
if (firstname) {
  console.log('my firstname is ' + firstname);
}


