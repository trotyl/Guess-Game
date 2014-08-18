function Game (guess, console) {
  this.guess = guess;
  this.console = console;
  this.counter = 6;
  this.status = "run";
  this.start();
}

Game.prototype.start = function () {
  this.console.log("Welcome!\n\nPlease input your number(6):\n");
};

Game.prototype.play = function (number) {
  if(this.status != 'run') {
    return;
  }
  if(this.is_duplated(number)) {
    this.console.log('Cannot input duplicate numbers!\n');
    return;
  }
  var result = this.guess.try(number);
  if(result != '4A0B') {
    this.counter--;
    if(this.counter == 0) {
      this.console.log('Game Over');
      this.status = 'over';
      return;
    }
    this.console.log(result + '\n');
    this.console.log('Please input your number(' + this.counter + '):\n');
  }
  else {
    this.console.log('Congratulations!\n');
  }
};