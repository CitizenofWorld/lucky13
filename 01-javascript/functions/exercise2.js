//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// myForEach(numbers, fn)
// 4
// 10
// 22

var numbers = [2,5,11];

var doubleAndLog = function(num) {
  console.log(num * 2);
}

var myForEach = function(arr, fn) {
  for (var index = 0; index < arr.length; index++) {
    fn( arr[index] );
  }
}

myForEach(numbers, doubleAndLog)










var lengths = function(stringArr) {
  var lengthsOfElems = [];
  // var fn = function(elem) {
  //   lengthsOfElems.push( elem.length );    
  // } 
  stringArr.forEach(function(elem) {
    lengthsOfElems.push( elem.length );    
  });
  // for (var index = 0; index < stringArr.length; index++) {
  //   lengthsOfElems.push( stringArr[index].length );
  // }
  return lengthsOfElems;
}

console.log(lengths(['how', 'are', 'we'])); // [3,3,2]


// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

'ryan is super awesome' // 'awesome super is ryan'

// your code here