let line1 = readline().split("").map( (value) => parseInt(value));
let line2 = readline().split("").map( (value) => parseInt(value));
let line3 = readline().split("").map( (value) => parseInt(value));
let line4 = readline().split("").map( (value) => parseInt(value));
let sudoku = [line1,line2, line3, line4];

const sudokuSize = 4;

function solve(grid, row, col)
{
    if (row == sudokuSize - 1 && col == sudokuSize) return true;

    if (col == sudokuSize) {
        row++;
        col = 0;
    }

    // if current position in grid already contains a number, solve next number in the grid
    if (grid[row][col] != 0) return solve(grid, row, col + 1);

    for(let num = 1; num <= sudokuSize; num++)
    {
        // Check if it is safe to place row column
        if (validMove(grid, row, col, num)) {
            grid[row][col] = num;

            if (solve(grid, row, col + 1))
                return true;
        }

        // if not correct, set value to 0
        grid[row][col] = 0;
    }
    return false;
}

function validMove(grid, row, col, num)
{
    // same num in row?
    for(let x = 0; x <= 3; x++) {
        if (grid[row][x] == num) {
            return false;
        }
    }

    // same num in column?
    for(let x = 0; x <= 3; x++) {
        if (grid[x][col] == num) {
            return false;
        }
    }

    // same num in subgrid?
    let startRow = row - row % 2,
        startCol = col - col % 2;

    for(let i = 0; i < 2; i++) {
        for(let j = 0; j < 2; j++) {
            if (grid[i + startRow][j + startCol] == num) {
                return false;
            }
        }
    }


    return true;
}

solve(sudoku, 0, 0);
console.log(sudoku.map( (line) => line.join("")).join("\n"));