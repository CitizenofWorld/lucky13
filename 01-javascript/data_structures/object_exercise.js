console.log('im ready');

var favRecipe = {
  name: 'aussie surprise',
  servings: 1,
  ingredients: ['tim tams', 'vegemite', 'tomato sauce']
}



console.log('name: ' + favRecipe.name);
console.log(favRecipe.servings);
console.log(favRecipe.ingredients.join('\n'));

console.log('ingredients', favRecipe.ingredients)

for (var index = 0; index < favRecipe.ingredients.length; index++) {
  console.log(index);
}


var books = [{
  title: 'whys poignant guide to ruby',
  author: 'why',
  alreadyRead: true
},{
  title: 'javascript & jquery',
  author: 'some guy name john d',
  alreadyRead: false
}];

for (var index = 0; index < books.length; index++) {
  var book = books[index];
  var desc = book.title + ' ' + book.author

  if (book.alreadyRead) {
    console.log('you read ' + desc);
  } else {
    console.log('you need to read ' + desc);
  }
}

var movie = {
  title: 'sharknado',
  duration: 100,
  stars: ['sharks', 'the guy from 90210']
}

var movieInfo = function(movie) {
  return movie.title + ' ' + movie.duration + ' ' + movie.stars
}

console.log( movieInfo(movie) );



