const directions = {
    'UP': 'UP',
    'RIGHT': 'RIGHT',
    'DOWN': 'DOWN',
    'LEFT': 'LEFT',
};

class Game {
    constructor(grid, direction, pos) {
        this.grid = grid;
        this.direction = direction;
        this.pos = pos;
        this.initPos = { ...this.pos };
        this.visitedCoords = [];
        this.moves = 0;
        this.hasPassedStartingPoint = 0;

        this.visit(this.currentCoords(), this.direction);
    }

    hasSeenCellBefore() {
        if (this.hasPassedStartingPoint === 0 && this.moves < 1000) return false;

        return this.visitedCoords.includes(this.currentCoords() + this.direction);
    }

    moveTimes(times) {
        if (times === 0) return;

        [...Array(times)].forEach( _ => {
            this.move();
        });
    }

    move() {
        while (this.findNextPostion() === '#') {
            this.switchDirection();
        }

        let cell = this.findNextPostion();

        if (cell === '.' || cell === 'O') this.updatePosition();

        if (this.pos.x === this.initPos.x && this.pos.y === this.initPos.y) this.hasPassedStartingPoint = 1;

        this.moves++;
    }

    switchDirection() {
        let initDirection = this.direction;
        if(initDirection === directions.UP) this.direction = directions.RIGHT;
        if(initDirection === directions.RIGHT) this.direction = directions.DOWN;
        if(initDirection === directions.DOWN) this.direction = directions.LEFT;
        if(initDirection === directions.LEFT) this.direction = directions.UP;
    }

    updatePosition() {
        if (this.direction === directions.UP) this.pos.y--;
        if (this.direction === directions.RIGHT) this.pos.x++;
        if (this.direction === directions.DOWN) this.pos.y++;
        if (this.direction === directions.LEFT) this.pos.x--;
        this.visit(this.currentCoords(), this.direction);
    }

    findNextPostion() {
        if (this.direction === directions.UP) return this.grid[this.pos.y - 1][this.pos.x];
        if (this.direction === directions.RIGHT) return this.grid[this.pos.y][this.pos.x + 1];
        if (this.direction === directions.DOWN) return this.grid[this.pos.y + 1][this.pos.x];
        if (this.direction === directions.LEFT) return this.grid[this.pos.y][this.pos.x - 1];
    }

    nextCoords() {
        if (this.direction === directions.UP) return `${this.pos.x} ${this.pos.y - 1}`;
        if (this.direction === directions.RIGHT) return `${this.pos.x + 1} ${this.pos.y}`;
        if (this.direction === directions.DOWN) return `${this.pos.x} ${this.pos.y + 1}`;
        if (this.direction === directions.LEFT) return `${this.pos.x - 1} ${this.pos.y}`;
    }

    currentCoords() {
        return `${this.pos.x} ${this.pos.y}`;
    }

    visit(coords, dir) {
        this.visitedCoords.push(coords + dir);
    }
}

const [width, height] = readline().split(' ').map(value => parseInt(value));
const moves = parseInt(readline());

let grid = [...Array(height)].map( _ => readline().split(''));

function findPosition(grid, char) {
    const row = grid.findIndex(line => line.includes(char));
    const col = grid[row].indexOf(char);

    return {
        'x': col,
        'y': row,
    }
}

const gameToFindLoop = new Game(grid, directions.UP, findPosition(grid, 'O'));

while(!gameToFindLoop.hasSeenCellBefore()) {
    gameToFindLoop.move();
}

const game = new Game(grid, directions.UP, findPosition(grid, 'O'));

let realMoves = parseInt(moves % (gameToFindLoop.moves));

if (moves < 100) {
    realMoves = moves;
}

game.moveTimes(realMoves);

console.log(game.currentCoords());