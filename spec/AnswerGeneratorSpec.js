describe("AnswerGeneratorSpec", function() {
  var answer_generator;

  beforeEach(function() {
    answer_generator = new AnswerGenerator();
  });

  it("should be output a string of a length-4 number that do not repeat", function() {
    var num = answer_generator.getNumber()
    var is_repeated = false;
    var checkSet = {};
    for (var i = 4; i >= 0; i--) {
      is_repeated = checkSet[num[i]]? true: false;
      checkSet[num[i]] = true;
    };
    expect(is_repeated).toEqual(false);
    expect(num.length).toEqual(4);
    expect(typeof(parseInt(num))).toEqual('number');
  });
});