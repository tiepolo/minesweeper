'use strict';

var printBoard = function printBoard(board) {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
};

// Creating the game board using an array
var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
console.log(board);