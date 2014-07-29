describe("CompareNumberSpec", function() {
  var answer;
  var guess;
  var compareno;

  beforeEach(function() {
    compareno = new CompareNumber();
  });

  it("1234 & 1234 should be output 4A0B", function() {
    answer = "1234";
    guess = "1234";
    expect(compareno.checkGuess(answer, guess)).toEqual("4A0B");
  });

  // demonstrates use of spies to intercept and test method calls
  it("1234 & 4321 should be output 0A4B", function() {
    answer = "1234";
    guess = "4321";
    expect(compareno.checkGuess(answer, guess)).toEqual("0A4B");
  });

  it("1234 & 5678 should be output 0A0B", function() {
    answer = "1234";
    guess = "5678";
    expect(compareno.checkGuess(answer, guess)).toEqual("0A0B");
  });

  it("1234 & 3456 should be output 0A2B", function() {
    answer = "1234";
    guess = "3456";
    expect(compareno.checkGuess(answer, guess)).toEqual("0A2B");
  });

  it("1234 & 1256 should be output 2A0B", function() {
    answer = "1234";
    guess = "1256";
    expect(compareno.checkGuess(answer, guess)).toEqual("2A0B");
  });

  it("1234 & 1324 should be output 2A2B", function() {
    answer = "1234";
    guess = "1324 ";
    expect(compareno.checkGuess(answer, guess)).toEqual("2A2B");
  });
});