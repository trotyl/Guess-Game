function CompareNumber() {
  this.compare = {};
  this.record = {};
  this.total_A = 0;
  this.total_opponent_A = 0;
}

CompareNumber.prototype.checkGuess = function(answer, guess) {
  // something complicated
  var count_A = 0;
  var count_total = 0;
  this.compare = {};
  for (var i = 3; i >= 0; i--) {
  	var combine_ans = answer[i].concat(i);
  	count_A += this.compare[combine_ans]? 1: 0;
 	  this.compare[combine_ans] = true;
  	var combine_gue = guess[i].concat(i);
  	count_A += this.compare[combine_gue]? 1: 0;
 	  this.compare[combine_gue] = true;
  	count_total += this.compare[answer[i]]? 1: 0;
  	this.compare[answer[i]] = true;
  	count_total += this.compare[guess[i]]? 1: 0;
  	this.compare[guess[i]] = true;
  };
  count_B = count_total - count_A;
  return "".concat(count_A).concat("A").concat(count_B).concat("B");
};
