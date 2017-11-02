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
    this.elems.startButton.addEventListener('click', this.startHandler)
    this.elems.stopButton.addEventListener('click', this.stopHandler)
    this.elems.resetButton.addEventListener('click', this.resetHandler)
  },

  startHandler: () => {
    this.timerId = setInterval(() => {
      this.seconds++ // this is now the timer oject
      this.elems.displayH1.textContent = this.seconds
    }, 1000)
  }, 

  stopHandler: () => {
    clearInterval(this.timerId);
  },

  resetHandler: () => {
    this.seconds = 0;
    this.elems.displayH1.textContent = this.seconds
  }
}

timer.init();
