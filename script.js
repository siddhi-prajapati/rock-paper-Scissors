let player1Move = '';
let player2Move = '';

function startGame(mode) {
  gameMode = mode;
  document.getElementById("gameArea").classList.remove("d-none");
  document.getElementById("result").textContent = '';
  document.getElementById("player1Hand").textContent = '❔';
  document.getElementById("player2Hand").textContent = '❔';
  player1Move = '';
  player2Move = '';
  document.getElementById("player2Label").textContent = mode === 'computer' ? 'Computer' : 'Player 2';
  document.getElementById("playAgainBtn").classList.add("d-none");
}

function makeMove(choice) {
  if (!player1Move) {
    player1Move = choice;
    document.getElementById("player1Hand").textContent = getEmoji(choice);

    if (gameMode === 'computer') {
      player2Move = getComputerMove();
      document.getElementById("player2Hand").textContent = getEmoji(player2Move);
      showResult();
    } else {
      document.getElementById("result").textContent = "Player 2, it's your turn!";
    }
  } else if (!player2Move && gameMode === 'friend') {
    player2Move = choice;
    document.getElementById("player2Hand").textContent = getEmoji(choice);
    showResult();
  }
}

function getComputerMove() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function getEmoji(choice) {
  if (choice === 'rock') return '✊';
  if (choice === 'paper') return '✋';
  return '✌️';
}

function showResult() {
  let resultText = '';
  if (player1Move === player2Move) {
    resultText = "It's a Draw! 🤝";
  } else if (
    (player1Move === 'rock' && player2Move === 'scissors') ||
    (player1Move === 'paper' && player2Move === 'rock') ||
    (player1Move === 'scissors' && player2Move === 'paper')
  ) {
    resultText = "Player 1 Wins! 🎉";
  } else {
    resultText = gameMode === 'computer' ? "Computer Wins! 🤖" : "Player 2 Wins! 🥳";
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("playAgainBtn").classList.remove("d-none");
}

function resetRound() {
  player1Move = '';
  player2Move = '';
  document.getElementById("player1Hand").textContent = '❔';
  document.getElementById("player2Hand").textContent = '❔';
  document.getElementById("result").textContent = '';
  document.getElementById("playAgainBtn").classList.add("d-none");
}

