// Printing the board to the console
const printBoard = board => {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

// Creating the game board using an array
const board = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ]
];

printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
