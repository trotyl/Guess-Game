function Game (guess, players) {
	this.guess = guess;
	this.counter = 6;
	this.opponent_counter = 6;
	this.players = (players == 2);
	this.turn = true;
	this.recordSet = {};
	this.answer = this.guess.answer;
}

Game.prototype.start = function() {
	for (var i = 3; i >= 0; i--) {
	  	var combine_answer = this.answer[i] + i.toString();
	 	this.recordSet[combine_answer + "1"] = 1;
	 	this.recordSet[combine_answer + "0"] = 1;
	};
	return "Welcome!\n\n" + (this.players? "Player1 ": "") + "Please input your number(6):\n";
};

Game.prototype.input = function(guess_number) {

	if(this.is_repeated(guess_number)) {
		return "Cannot input duplicate numbers!\n";
	}

	var count_A = 0;
	for (var i = 3; i >= 0; i--) {
	  	var combine_guess = guess_number[i] + i.toString() + (this.turn? "1": "0");
	  	count_A += (this.recordSet[combine_guess] == 1? 1: 0);
	 	this.recordSet[combine_guess] = 0;
	};
	if (this.players && this.turn) {
		this.opponent_counter -= count_A;
	}
	else if(this.players && !this.turn) {
		this.counter -= count_A;
	}

	var doit = (!this.players && this.counter--) || (this.players && this.turn && this.counter--);

	var compare = this.guess.setNumber(guess_number);
	var prefix = this.players? (this.turn? "Player2 ": "Player1 "): "";
	var tip = prefix + "Please input your number(" + ((!this.players || !this.turn)? this.counter: this.opponent_counter).toString() + "):\n";
	if(!this.players && this.counter == 0 || (this.players && this.turn && this.counter == 0)) {
		result = (this.players? "Player1 ": "") + "Game Over!\n" + (this.players && this.opponent_counter > 0? "\n" + tip: "");
		console.log(result);
	}
	else if (this.players && !this.turn && this.opponent_counter-- == 1) {
		result = "Player2 " + "Game Over!\n" + (this.opponent_counter > 0? "\n" + tip: "");
	}
	else {
		result = ((compare == "4A0B")? "Congratulations!\n": compare + "\n\n" + tip);
	}
	this.turn = !this.turn;
	return result;
};

Game.prototype.is_repeated = function(num) {
    var result = false;
    var checkSet = {};
    for (var i = 3; i >= 0; i--) {
      result = checkSet[num[i]]? true: false;
      checkSet[num[i]] = true;
    };
    return result;
};

var my_game;

Game.webStart = function (players) {
	my_game = new Game(new Guess(new AnswerGenerator(Math), new CompareNumber), players);
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