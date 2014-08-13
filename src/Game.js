function Game (answerGenerator, compare, players) {
	this.compare = compare;
	this.answer = answerGenerator.getNumber();
	this.counter_A = 6;
	this.counter_B = 6;
	this.players = (players == 2);
	this.turn = true;
	this.set_A = {};
	this.set_B = {};
}

Game.prototype.start = function() {
	for (var i = 3; i >= 0; i--) {
		this.set_A[this.answer[i].concat(i)] = true;
		this.set_B[this.answer[i].concat(i)] = true;
	};
	return "Welcome!\n\n" + (this.players? "Player1 ": "") + this.output(6);
};

Game.prototype.input = function(guess) {

	if(this.is_repeated(guess)) { return "Cannot input duplicate numbers!\n"; }
	var compare = this.compare.checkGuess(this.answer, guess, this.turn? this.set_A: this.set_B);

	if(this.players && this.turn) {
		this.counter_B -= this.compare.reduce;
	}
	else if(this.players) {
		this.counter_A -= this.compare.reduce;
	}

	(this.players && !this.turn)? this.counter_B --: this.counter_A --;

	var prefix = this.players? (this.turn? "Player2 ": "Player1 "): "";
	var tip = prefix + this.output((!this.players || !this.turn)? this.counter_A: this.counter_B);

	if(this.counter_A == 0 && (!this.players || this.turn)) {
		result = (this.players? "Player1 ": "") + "Game Over!\n";
	}
	else if (this.counter_B == 0 && this.players && !this.turn) {
		result = "Player2 " + "Game Over!\n";
	}
	else {
		result = ((compare == "4A0B")? "Congratulations!\n": compare + "\n\n" + tip);
	}

	this.turn = !this.turn;
	return result;
};

Game.prototype.is_repeated = function (num) {
    var result = false;
    var checkSet = {};
    for (var i = 3; i >= 0; i--) {
      result = checkSet[num[i]]? true: false;
      checkSet[num[i]] = true;
    };
    return result;
};

Game.prototype.output = function (count) {
	return "Please input your number(" + count.toString() + "):\n";
};

//封装到 Web 环境中

var my_game;

Game.webStart = function (players) {
	my_game = new Game(new AnswerGenerator(Math), new CompareNumber, players);
	var display = document.getElementById("responseOutputer");
	display.innerHTML = my_game.start().replace(/\n/g,"<br/>");
};

Game.prototype.webInput = function() {
	var commander = document.getElementById("content_of_input");
	var display = document.getElementById("responseOutputer");
	display.innerHTML = display.innerHTML + commander.value + "<br/>";
	display.innerHTML = display.innerHTML + my_game.input(commander.value).replace(/\n/g,"<br/>");
	commander.value = "";
};