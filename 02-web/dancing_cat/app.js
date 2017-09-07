
var catTimerId = null;

// cat walk one step
var catWalk = function() {
  var img = document.querySelector('img');
  var currentLeftOffset = parseInt(img.style.left);
  img.style.left = (currentLeftOffset + 10) + 'px';

  // window.innerWidth
}

var startCatWalk = function() {
  catTimerId = setInterval(catWalk, 100);
}