const W = parseInt(readline());
const H = parseInt(readline());
const N = parseInt(readline());

let grid = [...Array(H)].map(_ => [...Array(W)].map(_ => '-'));

let collisions = 0;

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    const C = inputs[2];

    grid[Y][X] = 'P';

    if(C === '^') {
        if(grid[Y-1][X] === 'P') {
            collisions++;
            grid[Y-1][X] = '-';
        } else {
            grid[Y-1][X] = 'P';
        }
    }

    if(C === '>') {
        if(grid[Y][X+1] === 'P') {
            collisions++;
            grid[Y][X+1] = '-';
        } else {
            grid[Y][X+1] = 'P'
        }
    }

    if(C === 'v') {
        if(grid[Y+1][X] === 'P') {
            collisions++;
            grid[Y+1][X] = '-';
        } else {
            grid[Y+1][X] = 'P'
        }
    }

    if(C === '<') {
        if(grid[Y][X-1] === 'P') {
            collisions++;
            grid[Y][X-1] = '-';
        } else {
            grid[Y][X-1] = 'P'
        }
    }

    grid[Y][X] = '-';
}

console.log(collisions);
