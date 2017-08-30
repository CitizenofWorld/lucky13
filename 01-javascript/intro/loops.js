console.log('loops');

console.log('before loop');
for (var count = 1; count <= 100; count = count + 1) {
  console.log(count);
  if (count % 3 === 0) {    
    console.log('cake')
  }
}

console.log('end of loop');


var secretNumber = 42;

var guess = prompt('enter a number:');

console.log('after prompt');

var userChar = '$'; // money tree
var spaceChar = ' ';
var maxRow = 5;
var row = 1;
var charCount = 1;

while (row <= maxRow) {
   var line = spaceChar.repeat(maxRow - row) + userChar.repeat(charCount) + spaceChar.repeat(maxRow - row);
   console.log(line);
   row++;
   charCount += 2;
 }

