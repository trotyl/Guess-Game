function CompareNumber() {
}

CompareNumber.prototype.checkGuess = function(answer, guess) {
  // something complicated
  var compare = {};
  var count_A = 0;
  var count_B = 0;
  for (var i = 3; i >= 0; i--) {
  	var combine_ans = answer[i].concat(i);
  	count_A += compare[combine_ans]? 1: 0;
 	compare[combine_ans] = true;
  	var combine_gue = guess[i].concat(i);
  	count_A += compare[combine_gue]? 1: 0;
 	compare[combine_gue] = true;
  	count_B += compare[answer[i]]? 1: 0;
  	compare[answer[i]] = true;
  	count_B += compare[guess[i]]? 1: 0;
  	compare[guess[i]] = true;
  };
  count_B -= count_A;
  return "".concat(count_A).concat("A").concat(count_B).concat("B");
};
