console.log('ready to calculate');

// find the span
var resultSpan = document.querySelector('span');
var num1Input = document.querySelector('#num1');
var num2Input = document.querySelector('#num2');
var calcButton = document.querySelector('button');

console.log(num1Input.value);
// resultSpan.textContent = (num1Input.value + num2Input.value)

// var someFunction = function() {
//   console.log('processing.........');
// }

var addTwoNumbers = function(num1, num2) {
  return num1 + num2;
}
                          // event, function
calButton.addEventListener('click', 6)

calcButton.addEventListener('click', function() {
  var num1 = Number(num1Input.value);
  var num2 = Number(num2Input.value);
  var sum = addTwoNumbers(num1, num2)
  resultSpan.textContent = sum;
})

