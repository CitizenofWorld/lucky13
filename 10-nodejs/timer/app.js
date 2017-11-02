var timer = {
  seconds: 0,
  timerId: null,
  elems: {
    startButton: document.querySelector('#start'),
    displayH1: document.querySelector('#display')
  },
  init: function() {

    console.log(this.elems)

    // var callback = function() {
    //   console.log(this.seconds) 
    // }

    // i want it to refer to the timer object
    // var callbackWithCorrectContext = callback.bind(this) // hard binding to the timer object

    this.elems.startButton.addEventListener('click', function() {})
  }
}

timer.init();