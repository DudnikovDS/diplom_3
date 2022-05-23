let players = ['x', 'o'];
let activePlayer;
let winner;
let board = [];

function startGame() {
  activePlayer = 0;
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard(board);
}

function click(row, column) {
  board[row][column] = players[activePlayer];
  renderBoard(board);
  ifWin();
  if (winner == activePlayer) {
    showWinner(winner);
  }

  if (activePlayer == 0) {
    activePlayer = 1;
  }
  else {
    activePlayer = 0
  }
}

function ifWin() {
  let arr_column_1 = [board[0][0], board[1][0], board[2][0]],
    arr_column_2 = [board[0][1], board[1][1], board[2][1]],
    arr_column_3 = [board[0][2], board[1][2], board[2][2]],
    arr_diag_1 = [board[0][0], board[1][1], board[2][2]],
    arr_diag_2 = [board[2][0], board[1][1], board[0][2]];

  if ((board[0].every((el) => el == players[activePlayer])) ||
    (board[1].every((el) => el == players[activePlayer])) ||
    (board[2].every((el) => el == players[activePlayer])) ||
    (arr_column_1.every((el) => el == players[activePlayer])) ||
    (arr_column_2.every((el) => el == players[activePlayer])) ||
    (arr_column_3.every((el) => el == players[activePlayer])) ||
    (arr_diag_1.every((el) => el == players[activePlayer])) ||
    (arr_diag_2.every((el) => el == players[activePlayer]))) {
    winner = activePlayer
  }
  else winner = 2;
}



