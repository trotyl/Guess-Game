function Guess(answer_generator, compare_number) {
	this.answer = answer_generator.getNumber();
	this.compare_number = compare_number;
}

Guess.prototype.setNumber = function (guess) {
	return this.compare_number.checkGuess(this.answer, guess);
}