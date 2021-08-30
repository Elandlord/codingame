/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const HEIGHT = parseInt(inputs[0]);
const WIDTH = parseInt(inputs[1]);
var inputs = readline().split(' ');
const C = inputs[0];
const CV = inputs[1];
const CH = inputs[2];

let grid = [...Array(HEIGHT)].map(_ => [...Array(WIDTH)].map(_ => ' '));

grid = grid.map((line, outerIndex) => {
    return line.map((column, innerIndex) => {
        if(outerIndex === 0 && innerIndex === 0) return C;
        if(outerIndex === 0 && innerIndex < WIDTH - 1) return CH;
        if(outerIndex === 0 && innerIndex === WIDTH - 1) return C;
        if(outerIndex < HEIGHT - 1 && innerIndex === 0) return CV;
        if(outerIndex < HEIGHT - 1 && innerIndex === WIDTH - 1) return CV;
        if(outerIndex === HEIGHT - 1 && innerIndex === 0) return C;
        if(outerIndex === HEIGHT - 1 && innerIndex < WIDTH - 1) return CH;
        if(outerIndex === HEIGHT - 1 && innerIndex === WIDTH - 1) return C;
        return ' ';
    });
});

grid.forEach(line => console.log(line.join('')))