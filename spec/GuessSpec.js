describe("GuessSpec", function() {

  //单元测试
  describe("GuessSpec_Unit", function() {
    var guess_num;
    var guess;
    var answer_generator;
    var compare_number;

    beforeEach(function() {
      answer_generator = {
        getNumber: null
      };
      spyOn(answer_generator, "getNumber").and.returnValue("1234");
    });

    it("1234 & 1234 should be output 4A0B", function() {
      compare_number = {
        checkGuess: null
      }
      spyOn(compare_number, "checkGuess").and.returnValue("4A0B");
      guess_num = "1234";
      guess = new Guess(answer_generator, compare_number);
      expect(guess.setNumber(guess_num)).toEqual("4A0B");
    });

  });


  //集成测试
  describe("GuessSpec_Integration", function() {
    var guess_num;
    var guess;
    var math;

    beforeEach(function() {
      my_math = {
        register : 0,
        random : function () {
          this.register += 0.1;
          return this.register;
        }
      };
    });

    it("1234 & 1234 should be output 4A0B", function() {
      guess_num = "1234";
      guess = new Guess(new AnswerGenerator(my_math), new CompareNumber());
      expect(guess.setNumber(guess_num)).toEqual("4A0B");
    });

  });
});
