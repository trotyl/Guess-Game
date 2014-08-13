function CompareNumber() {
  this.reduce = 0;
}

CompareNumber.prototype.checkGuess = function(answer, guess, set) {
  var count_A = 0;
  var count_total = 0;
  var set = set || {};
  var compare_A = {};
  var compare_total = {};
  this.reduce = 0;
  for (var i = 3; i >= 0; i--) {
  	count_A += compare_A[answer[i].concat(i)]? 1: 0;
 	  compare_A[answer[i].concat(i)] = true;
  	count_A += compare_A[guess[i].concat(i)]? 1: 0;
 	  compare_A[guess[i].concat(i)] = true;

    if(set[guess[i].concat(i)]) {
      this.reduce += 1;
      set[guess[i].concat(i)] = false; 
    }

  	count_total += compare_total[answer[i]]? 1: 0;
  	compare_total[answer[i]] = true;
  	count_total += compare_total[guess[i]]? 1: 0;
  	compare_total[guess[i]] = true;

  };
  count_B = count_total - count_A;
  return "".concat(count_A).concat("A").concat(count_B).concat("B");
};
