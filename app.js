let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const game_result = document.getElementById("game-result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	else return "Scissors";
}

function win(user, computer) {
	const userChoice_div = document.getElementById(user);
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}.`;
	game_result.innerHTML = "You win!";
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow') , 400);
}

function lose(user, computer) {
	const userChoice_div = document.getElementById(user);
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}.`;
	game_result.innerHTML = "You lose!";
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
}

function draw(user, computer) {
	const userChoice_div = document.getElementById(user);
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)}.`;
	game_result.innerHTML = "It's a draw!";
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
				
	}
}

function main() {
	rock_div.addEventListener('click', () => game("r"));
	paper_div.addEventListener('click', () => game("p"));
	scissors_div.addEventListener('click',() => game("s"));
}

main();
