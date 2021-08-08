const [width, height, time1, time2, time3] = readline().split(' ').map(value => parseInt(value));

class Asteroid {
    constructor(letter) {
        this.letter = letter;
        this.locations = [];
    }

    addLocation(x, y, time) {
        this.locations.push({
            'x': x,
            'y': y,
            'time': time,
        });
    }
}

let asteroids = [];

let pictures = [...Array(height)].map(_ => {
    return [firstPictureRow, secondPictureRow] = readline().split(' ');

    // find all asteroids on that row
    // create new asteroid if not exists
    // add the location to the available
})

let grid = [...Array(height)].map(_ => new Array(parseInt(width)).join('.'));

console.error(pictures, grid);

// loop over pictures, find out the motion (compare two positions)
// extrapolate the location of the asteroids, based on the motion
// save the expected location
// loop over grid, fill in asteroid on expected location