'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    var row = [];
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};
console.log(generatePlayerBoard(6, 6));

// Create a dynamically generated bomb board.
var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    var row = [];
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    };
    board.push(row);
  };
  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    //We will fix the bombs being placed on top of other bombs after we learn about Control Flow
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfRows);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
  return board;
};
var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);