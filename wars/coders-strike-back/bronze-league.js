function degreesToRadians(degrees) {
    var pi = Math.PI;
    return degrees * (pi/180);
}

class Player {
    constructor () {
        this.hasBoost = true;
        this.thrust = 0;
    }

    boost(x, y) {
        this.hasBoost = false;
        console.log(`${x} ${y} BOOST`)
    }

    move(x, y, thrust) {
        console.log(`${x} ${y} ${thrust}`);
    }
}

let player = new Player;

while (true) {
    const [x, y, nextCheckpointX, nextCheckpointY, nextCheckpointDist, nextCheckpointAngle] = readline().split(' ').map(v => parseInt(v));
    const [opponentX, opponentY] = readline().split(' ').map(v => parseInt(v));

    let radians = degreesToRadians(nextCheckpointAngle);

    if (nextCheckpointAngle < 90) {
        let bestForce = nextCheckpointDist * Math.cos(radians) * 0.25;

        if(bestForce > 100) {
            player.thrust = 100;
        } else if (bestForce < 0) {
            player.thrust = 0;
        } else {
            player.thrust = parseInt(bestForce);
        }
    } else {
        player.thrust = 0;
    }

    if (nextCheckpointDist > 3000 && player.hasBoost && nextCheckpointAngle > -10 && nextCheckpointAngle < 10) {
        player.boost(nextCheckpointX, nextCheckpointY);
    } else {
        player.move(nextCheckpointX, nextCheckpointY, player.thrust)
    }
}
