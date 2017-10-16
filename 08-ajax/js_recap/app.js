window.addEventListener('load', function() {

  var h1 = document.querySelector('h1');
  console.log(h1.textContent);

  // querySelector().addEventListener
  $('.stuff').on('click', function(event) {
    console.log(event.target.textContent);
  })


});

var wdiLib = {
  sample: function(arr) {
    var index = Math.floor(Math.random() * arr.length)
    return arr[index];
  }
}

var scores = {
  jon: 5,
  fiona: 6
}



// _.each(scores, function(score, name) {
//   console.log('key', name);
//   console.log('value', score);
// })

// wdiLib.sample()