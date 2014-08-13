function CompareNumber() {
  this.reduce = 0;
}

CompareNumber.prototype.checkGuess = function(answer, guess, set) {
  var count_A = count_total = 0;
  var set = set || {};
  var compare_A = {};
  var compare_total = {};
  this.reduce = 0;
  for (var i = 3; i >= 0; i--) {
 	  compare_A[answer[i].concat(i)] = true;
  	compare_total[answer[i]] = true;
  };

  for (var i = 3; i >= 0; i--) {
    count_A += compare_A[guess[i].concat(i)]? 1: 0;
    count_total += compare_total[guess[i]]? 1: 0;
    if(set[guess[i].concat(i)]) {
      this.reduce += 1;
      set[guess[i].concat(i)] = false; 
    }
  };
  count_B = count_total - count_A;
  return "".concat(count_A).concat("A").concat(count_B).concat("B");
};
