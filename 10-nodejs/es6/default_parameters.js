
function greeting(name) {
  name = name || 'dt' // before es6

  return "hello " + name
}

// es6
function greeting(name = 'dt') {
  return "hello" + name
}
greeting('lucky13')
console.log( greeting() )


function greeting(option = { name: 'lucky13' }) {
  return "hello " + option.name
}
greeting({ name: 'dt' })
greeting()
