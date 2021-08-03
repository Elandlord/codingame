const w = parseInt(readline());
const h = parseInt(readline());

const board = [...Array(h)].map( () => readline());

board.map( (row, rowIndex) => {
    cells = row.split("");

    return cells.map( (cell, cellIndex) => {
        if (cell === 'x') return '.';

        let adjacentMines = 0;

        // up
        if (rowIndex > 0 && board[rowIndex - 1].split("")[cellIndex] === 'x') adjacentMines++;

        // up right
        if (rowIndex > 0 && cellIndex <= w - 1 && board[rowIndex - 1].split("")[cellIndex + 1] === 'x') adjacentMines++;

        // right
        if (cellIndex <= w - 1 && cells[cellIndex + 1] === 'x') adjacentMines++;

        // right down
        if (rowIndex < h - 1 && cellIndex <= w - 1 && board[rowIndex + 1].split("")[cellIndex + 1] === 'x') adjacentMines++;

        // down
        if (rowIndex < h - 1 && board[rowIndex + 1].split("")[cellIndex] === 'x') adjacentMines++;

        // down left
        if (rowIndex < h - 1 && cellIndex > 0 && board[rowIndex + 1].split("")[cellIndex - 1] === 'x') adjacentMines++;

        // left
        if (cellIndex > 0 && cells[cellIndex - 1] === 'x') adjacentMines++;

        // left up
        if (rowIndex > 0 && cellIndex > 0 && board[rowIndex - 1].split("")[cellIndex - 1] === 'x') adjacentMines++;

        return adjacentMines === 0 ? "." : adjacentMines;
    }).join("");
}).forEach( (row) => {
    console.log(row);
});