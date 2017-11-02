var timer = {
  seconds: 0,
  timerId: null,
  elems: {
    startButton: document.querySelector('#start'),
    stopButton: document.querySelector('#stop'),
    resetButton: document.querySelector('#reset'),
    displayH1: document.querySelector('#display')
  },
  init: function() {
    this.elems.displayH1.textContent = this.seconds
    this.elems.startButton.addEventListener('click', this.startHander.bind(this))
    this.elems.stopButton.addEventListener('click', this.stopHander.bind(this))
    this.elems.resetButton.addEventListener('click', this.resetHander.bind(this))
  },

  startHander() {
    this.timerId = setInterval(() => {
      this.seconds++ // this is now the timer oject
      this.elems.displayH1.textContent = this.seconds
    }, 1000)
  }, 

  stopHander() {
    clearInterval(this.timerId);
  },

  resetHander() {
    this.seconds = 0;
    this.elems.displayH1.textContent = this.seconds
  }
}

timer.init();


