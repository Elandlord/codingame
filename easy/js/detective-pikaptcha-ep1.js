var inputs = readline().split(' ');
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);

// Initialize new grid for given height, return input stream
const grid = [...Array(height)].map( function(row) {
    return readline();
});

// Map the existing grid to the row with 0 replaced by number of adjacent passages
let newGrid = grid.map( function(row, rowIndex) {
    let splittedRow = row.split(""); // create array from row (string)

    return splittedRow.map( function(cell, cellIndex) {
        if(cell === "#") return "#"; // if cell contains #, it is not a passage

        let adjacentPassages = 0;

        // up, skip if rowIndex is zero (no above row exists)
        if( rowIndex > 0 && parseInt(grid[rowIndex - 1].split("")[cellIndex]) === 0) {
            adjacentPassages++;
        }

        // right, skip if cellIndex is higher than the length of the row - 1 (no cell to the right)
        if( cellIndex <= splittedRow.length - 1 && parseInt(grid[rowIndex].split("")[cellIndex + 1]) === 0) {
            adjacentPassages++;
        }

        // down, skip if rowIndex is smaller than grid.length - 1 (no below row exists)
        if( rowIndex < grid.length - 1 && parseInt(grid[rowIndex + 1].split("")[cellIndex])  === 0) {
            adjacentPassages++;
        }

        // left, only when cellIndex is higher than 0 (if 0, no left cell exists)
        if( cellIndex > 0 && parseInt(grid[rowIndex].split("")[cellIndex - 1])  === 0) {
            adjacentPassages++;
        }

        return adjacentPassages;
    }).join(""); // join the array into a string
});

newGrid.forEach( function(newRow) {
    console.log(newRow); // log the new grid row to the console
});

