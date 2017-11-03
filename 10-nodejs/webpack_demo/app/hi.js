
function sayHi(name) {
  console.log('hi ' + name)
}


function secret() {

}

function sayLunch() {
  secret()
}

module.exports = {
  sayHi: sayHi,
  sayLunch: sayLunch
}