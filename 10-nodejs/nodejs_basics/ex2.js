

var total = 0;

debugger

for (var index = 2; index < process.argv.length; index++) {
  total = total + parseInt(process.argv[index]);
}

console.log(total);
