const [nbFloors, width, nbRounds,
    exitFloor, exitPos, nbTotalClones,
    nbAdditionalElevators, nbElevators] = readline().split(' ').map( (value) => parseInt(value));

let elevators = [];

[...Array(nbElevators)].map( _ => {
    [elevatorFloor, elevatorPos] = readline().split(' ');
    elevators[elevatorFloor] = elevatorPos;
});

while (true) {
    [cloneFloor, clonePos, direction] = readline().split(' ');

    if (cloneFloor < 0 || cloneFloor == exitFloor) {
        let exitDirection = exitPos - clonePos > 0 ? "RIGHT" : "LEFT";
        console.log(exitDirection != direction ? "BLOCK" : "WAIT");
        continue;
    }

    let elevatorPos = elevators[cloneFloor];
    let elevatorDirection = elevatorPos - clonePos > 0 ? "RIGHT" : "LEFT";

    if (elevatorPos - clonePos === 0) {
        console.log("WAIT");
        continue;
    }

    console.log(elevatorDirection != direction ? "BLOCK" : "WAIT");
}
