function AnswerGenerator(math) {
  this.math = math;
}

AnswerGenerator._get_random = function (math, repeatSet) {
  result = Math.floor(math.random() * 10);
  return repeatSet[result]? AnswerGenerator._get_random(math, repeatSet): result;
};

AnswerGenerator.prototype.getNumber = function () {
  var numberSet = [];
  var repeatSet = {};

  for (var i = 0; i < 4; i++) {
  	numberSet[i] = AnswerGenerator._get_random(this.math, repeatSet);
  	repeatSet[numberSet[i]] = true;
  };

  return "".concat(numberSet[0]).concat(numberSet[1]).concat(numberSet[2]).concat(numberSet[3]);
};

