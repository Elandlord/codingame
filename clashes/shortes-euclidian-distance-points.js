const N = parseInt(readline());

let points = [...Array(N)].map((v) => {
    let inputs = readline().split(' ');
    return {
        x: parseInt(inputs[0]),
        y: parseInt(inputs[1])
    }
});

let distances = points.map((point) => {
    return Math.sqrt(((0 - point.x) * (0 - point.x)) + ((0 - point.y) * (0 - point.y)));
});

let minimumValue = Math.min(...distances);
let closest = points[distances.indexOf(minimumValue)];
console.log(`${closest.x} ${closest.y}`);
