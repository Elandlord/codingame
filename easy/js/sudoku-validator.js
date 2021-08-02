class SudokuChecker {
    makeGrid(matrix, firstRow, firstCol) {
        return [
            matrix[firstRow][firstCol],
            matrix[firstRow][firstCol + 1],
            matrix[firstRow][firstCol + 2],
            matrix[firstRow + 1][firstCol],
            matrix[firstRow + 1][firstCol + 1],
            matrix[firstRow + 1][firstCol + 2],
            matrix[firstRow + 2][firstCol],
            matrix[firstRow + 2][firstCol + 1],
            matrix[firstRow + 2][firstCol + 2],
        ];
    }

    hasAllDigits(arrayToCheck) {
        let results = [...Array(9)].map( (num, index) => {
            if(!arrayToCheck.includes(String(index + 1))) {
                return false;
            }
            return true;
        }).filter(Boolean);

        return results.length === 9;
    }

    isValidSudoku(rows, columns, grids) {
        let rowsHasDigits = rows.filter( (row) => sudokuChecker.hasAllDigits(row)).length === 9;
        let colsHasDigits = columns.filter( (column) => sudokuChecker.hasAllDigits(column)).length === 9;
        let gridHasDigits = grids.filter( (grid) => sudokuChecker.hasAllDigits(grid)).length === 9;

        return rowsHasDigits && colsHasDigits && gridHasDigits;
    }

}

const rows = [...Array(9)].map( () => {
    return readline().split(' ');
});

const columns = rows.map( (row, rowIndex) => {
    return [...Array(9)].map( (arr, colIndex) => {
        return rows[colIndex][rowIndex];
    });
});

const sudokuChecker = new SudokuChecker();

const grids = [
    sudokuChecker.makeGrid(rows, 0, 0),
    sudokuChecker.makeGrid(rows, 0, 3),
    sudokuChecker.makeGrid(rows, 0, 6),
    sudokuChecker.makeGrid(rows, 3, 0),
    sudokuChecker.makeGrid(rows, 3, 3),
    sudokuChecker.makeGrid(rows, 3, 6),
    sudokuChecker.makeGrid(rows, 6, 0),
    sudokuChecker.makeGrid(rows, 6, 3),
    sudokuChecker.makeGrid(rows, 6, 6)
];

console.log(sudokuChecker.isValidSudoku(rows, columns, grids));