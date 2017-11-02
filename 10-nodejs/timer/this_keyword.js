// 4 to 5 rules

// how to work the context

// 1. default binding

function doStuff() {
  console.log(this);
}

// var oooo = {
//   doStuff: doStuff
// }

// oooo.doStuff()

//  doStuff(); // global or undefined

// 2. implicit binding

var boo = {
  doStuff: function() {
    console.log(this)
  }
}

boo.doStuff() // boo

// 3. explicit binding

doStuff.call({ haha: 'over here' })

var person = { name: 'me' }
doStuff.apply(person)

// 4. hard binding

var hardStuff = doStuff.bind({ hard: 'core' })
hardStuff()

// 5. puff magic- contructor functions
function Cat() {
  this.name = 'unicorn'

  // return this
}

var c1 = new cat()
c1.name
// returns a new object with this bind to it