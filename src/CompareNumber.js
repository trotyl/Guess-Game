function CompareNumber() {
  this.reduce = 0;
}

CompareNumber.prototype.checkGuess = function(answer, guess, set) {
  var count_A = 0;
  var set = set || {};
  this.reduce = 0;
  _(4).times(function (i) {
    count_A += (answer[i] == guess[i])? 1: 0;
  })
  for (var i = 3; i >= 0; i--) {
    if(set[guess[i].concat(i)]) {
      this.reduce += 1;
      set[guess[i].concat(i)] = false; 
    }
    
  };
  var count_total = _.intersection(answer, guess).length;
  count_B = count_total - count_A;
  return count_A + "A" + count_B + "B";
};

