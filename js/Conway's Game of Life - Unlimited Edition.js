// Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

// The rules of the game are:

// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any dead cell with exactly three live neighbours becomes a live cell.
// Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)

// For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively (PHP, C: plain black and white squares). You can take advantage of the htmlize function to get a text representation of the universe, e.g.:

// console.log(htmlize(cells));

function gameOfLife(cells, generations) {
    const numRows = cells.length;
    const numCols = cells[0].length;
  
    // Helper function to count the number of live neighbors for a given cell
    function countLiveNeighbors(row, col) {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue; // Skip the current cell
          const neighborRow = row + i;
          const neighborCol = col + j;
          if (
            neighborRow >= 0 &&
            neighborRow < numRows &&
            neighborCol >= 0 &&
            neighborCol < numCols &&
            cells[neighborRow][neighborCol] === 1
          ) {
            count++;
          }
        }
      }
      return count;
    }
  
    // Create a new 2D array to store the next generation of cells
    let nextGenCells = [];
    for (let i = 0; i < numRows; i++) {
      nextGenCells.push(Array(numCols).fill(0));
    }
  
    // Apply the rules of the game to compute the next generation
    for (let generation = 0; generation < generations; generation++) {
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const liveNeighbors = countLiveNeighbors(row, col);
          if (cells[row][col] === 1) {
            // Cell is alive
            if (liveNeighbors < 2 || liveNeighbors > 3) {
              nextGenCells[row][col] = 0; // Cell dies
            } else {
              nextGenCells[row][col] = 1; // Cell survives
            }
          } else {
            // Cell is dead
            if (liveNeighbors === 3) {
              nextGenCells[row][col] = 1; // Cell becomes alive
            }
          }
        }
      }
  
      // Update the current generation with the next generation
      cells = nextGenCells;
      // Reset the next generation array
      nextGenCells = [];
      for (let i = 0; i < numRows; i++) {
        nextGenCells.push(Array(numCols).fill(0));
      }
    }
  
    // Find the boundaries of the living cells
    let minRow = numRows;
    let maxRow = -1;
    let minCol = numCols;
    let maxCol = -1;
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (cells[row][col] === 1) {
          minRow = Math.min(minRow, row);
          maxRow = Math.max(maxRow, row);
          minCol = Math.min(minCol, col);
          maxCol = Math.max(maxCol, col);
        }
      }
    }
  
    // Crop the living cells
    const croppedCells = [];
    for (let row = minRow; row <= maxRow; row++) {
      const croppedRow = cells[row].slice(minCol, maxCol + 1);
      croppedCells.push(croppedRow);
    }
  
    return croppedCells.length === 0 ? [[]] : croppedCells;
  }
  
 
  
