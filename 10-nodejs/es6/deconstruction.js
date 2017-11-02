function getFavColor() {
  return ['pink', 'mistyrose']
}

// var favColors = getFavColor()
var [leastFavColor, favColor] = getFavColor()

console.log(favColor)

function getPerson() {
  return {
    name: 'lucky13',
    age: 13
  }
}

var { name, age: personAge } = getPerson()
console.log(name, personAge)

