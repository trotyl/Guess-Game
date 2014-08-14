function AnswerGenerator() {
}

AnswerGenerator._get_random = function (numberSet) {
  result = Math.floor(Math.random() * 10);
  return _.contains(numberSet, result)? AnswerGenerator._get_random(numberSet): result;
};

AnswerGenerator.prototype.getNumber = function () {
  var numberSet = [];
  _(4).times(function (n) {
    numberSet[n] = AnswerGenerator._get_random(numberSet);
  });
  return "" + numberSet[0] + numberSet[1] + numberSet[2] + numberSet[3];
};
