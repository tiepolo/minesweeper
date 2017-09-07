'use strict';

// Blank board
var blankLine = '  |   |  ';

// Showing what a blank board looks like
console.log('This is what an empty board will look like.');
console.log(blankline);
console.log(blankline);
console.log(blankline);

// What the board will look like when a player guesses the first square of a row
var guessLine = '1 |   |  ';

// What the board looks like when the player reveals a bomb
var bombLine = '  | B |  ';

// Showing what a board might look like during a game
console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankline);