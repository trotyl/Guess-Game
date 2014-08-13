describe("GameSpec", function() {
  describe("GameSpec_Single_Player", function() {
    describe("GameSpec_initial_Output", function() {
      var game = new Game(new AnswerGenerator(Math), new CompareNumber(), 1);       

      beforeEach(function() {
      });

      it("Initail output should be \"Welcome!\" with a empty line and then \"Please input your number(6):\" ", function() {
        var initial_output = "Welcome!\n\nPlease input your number(6):\n";
        expect(game.start()).toEqual(initial_output);
      });

    });

    describe("GameSpec_Response", function() {
      var game;

      beforeEach(function() {
        answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");
        game = new Game(answer_generator, new CompareNumber(), 1);
      });

      it("1234 & 4321 should be \"0A4B\"", function() {
        expect(game.input("4321").substring(0,4)).toEqual("0A4B");
      });

    });

    describe("GameSpec_Win", function() {
      var game;

      beforeEach(function() {
        answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");
        game = new Game(answer_generator, new CompareNumber(), 1);
      });

      it("1234 & 1234 should be \"Congratulations!\"", function() {
        expect(game.input("1234")).toEqual("Congratulations!\n");
      });

    });

    describe("GameSpec_Counter", function() {
      answer_generator = {
        getNumber: null
      };
      spyOn(answer_generator, "getNumber").and.returnValue("1234");
      var game = new Game(answer_generator, new CompareNumber(), 1);

      beforeEach(function() {
      });

      it("Opportunity should decrease", function() {
        expect(game.input("5678").substring(4)).toEqual("\n\nPlease input your number(5):\n");
        expect(game.input("5678").substring(4)).toEqual("\n\nPlease input your number(4):\n");
        expect(game.input("5678").substring(4)).toEqual("\n\nPlease input your number(3):\n");
        expect(game.input("5678").substring(4)).toEqual("\n\nPlease input your number(2):\n");
        expect(game.input("5678").substring(4)).toEqual("\n\nPlease input your number(1):\n");
      });
    });

    describe("GameSpec_Over", function() {
      var game;
      beforeEach(function() {
        answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");
        game = new Game(answer_generator, new CompareNumber(), 1);
      });

      it("Game should be over after 6 wrong trials", function() {
        game.input("5678");
        game.input("5678");
        game.input("5678");
        game.input("5678");
        game.input("5678");
        expect(game.input("5678")).toEqual("Game Over!\n");
      });
    });

    describe("GameSpec_Input_Repeated", function() {
      var game;

      beforeEach(function() {
        answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");
        game = new Game(answer_generator, new CompareNumber(), 1);
      });

      it("input \"1111\" should be \"Cannot input duplicate numbers!\"", function() {
        expect(game.input("1111")).toEqual("Cannot input duplicate numbers!\n");
      });

    });

  });

  describe("GameSpec_Multi_Player", function() {
    describe("GameSpec_initial_Output", function() {
      var game;

      beforeEach(function() {
        game = new Game(new AnswerGenerator(Math), new CompareNumber(), 2);
      });

      it("output should be \"Welcome!\" with and then \"Player1 Please input your number(6):\" ", function() {
        var initial_output = "Welcome!\n\nPlayer1 Please input your number(6):\n";
        expect(game.start()).toEqual(initial_output);
      });

    });

    describe("GameSpec_Response", function() {
      var game;

      beforeEach(function() {
        answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");
        game = new Game(answer_generator, new CompareNumber(), 2);
      });

      it("1234 & 4321 should be \"0A4B\" on both players", function() {
        expect(game.input("4321").substring(0,4)).toEqual("0A4B");
        expect(game.input("4321").substring(0,4)).toEqual("0A4B");
      });

    });

    describe("GameSpec_Win", function() {
      var game;

      beforeEach(function() {
        answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");
        game = new Game(answer_generator, new CompareNumber(), 2);
      });

      it("Player1 win -> \"Congratulations!\"", function() {
        expect(game.input("1234")).toEqual("Congratulations!\n");
      });

      it("Player2 win -> \"Congratulations!\"", function() {
        game.input("5678");
        expect(game.input("1234")).toEqual("Congratulations!\n");
      });
    });

    describe("GameSpec_Counter", function() {
      var game;
      beforeEach(function() {
        answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");

        game = new Game(answer_generator, new CompareNumber(), 2);
      });

      it("Opportunity should decrease", function() {
        expect(game.input("4321").substring(6)).toEqual("Player2 Please input your number(6):\n");
        expect(game.input("4321").substring(6)).toEqual("Player1 Please input your number(5):\n");
        expect(game.input("4321").substring(6)).toEqual("Player2 Please input your number(5):\n");
        expect(game.input("4321").substring(6)).toEqual("Player1 Please input your number(4):\n");
        expect(game.input("4321").substring(6)).toEqual("Player2 Please input your number(4):\n");
      });
    });

    describe("GameSpec_Over", function() {
      var game;
      beforeEach(function() {
        answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");
        game = new Game(answer_generator, new CompareNumber(), 2);
      });

      it("Game should be over after 12 wrong trials", function() {
        for (var i = 10; i > 0; i--) {
          game.input("5678");
        };
        expect(game.input("5678")).toEqual("Player1 Game Over!\n");
      });
    });

    describe("GameSpec_Input_Repeated", function() {
      var game;

      beforeEach(function() {
        answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");
        game = new Game(answer_generator, new CompareNumber(), 2);
      });

      it("input \"1111\" should be \"Cannot input duplicate numbers!\"", function() {
        expect(game.input("1111")).toEqual("Cannot input duplicate numbers!\n");
      });

    });

    describe("GameSpec_Deduce_Each_Other", function() {
      var game;

      beforeEach(function() {
        var answer_generator = {
          getNumber: null
        };
        spyOn(answer_generator, "getNumber").and.returnValue("1234");
        game = new Game(answer_generator, new CompareNumber(), 2);
      });

      it("should decrease the other counter by A", function() {
        game.start();
        expect(game.input("1256").substring(6)).toEqual("Player2 Please input your number(4):\n");
        expect(game.input("1256").substring(6)).toEqual("Player1 Please input your number(3):\n");
      });

    });



  });

});