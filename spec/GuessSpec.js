describe("GuessSpec", function() {

  //单元测试
  describe("GuessSpec_Unit", function() {
    var guess_num;
    var guess;
    var answerGenerator;
    var compareNumber;

    beforeEach(function() {
      answerGenerator = new AnswerGenerator();
      spyOn(answerGenerator, "getNumber").and.returnValue("1234");
    });

    it("1234 & 1234 should be output 4A0B", function() {
      compareNumber = new CompareNumber();
      spyOn(compareNumber, "checkGuess").and.returnValue("4A0B");
      guess_num = "1234";
      guess = new Guess(answerGenerator, compareNumber);
      expect(guess.setNumber(guess_num)).toEqual("4A0B");
    });

  });


  //集成测试
  describe("GuessSpec_Integration", function() {
    var guess_num;
    var guess;
    var randoms;

    beforeEach(function() {
      randoms = [0.1, 0.2, 0.3, 0.4];

      spyOn(Math, 'random').and.callFake(function () {
        return randoms.shift();
      });
    });

    it("1234 & 1234 should be output 4A0B", function() {
      guess_num = "1234";
      guess = new Guess(new AnswerGenerator(), new CompareNumber());
      expect(guess.setNumber(guess_num)).toEqual("4A0B");
    });

  });
});
