// Create a dynamically generated board.
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [
  ];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};
console.log(generatePlayerBoard(6, 6));

// Create a dynamically generated bomb board.
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [
  ];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    };
    board.push(row);
  };
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
  };


  return board;
};
