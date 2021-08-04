const [W, H] = readline().split(' ').map( (value) => parseInt(value));

const GRID = [...Array(H)].map( _ => {
    return readline().split(" ");
});

const ROOM_TYPE_MAPPING = [
    null,
    {
        TOP: "DOWN",
        RIGHT: "DOWN",
        LEFT: "DOWN",
    },
    {
        RIGHT: "LEFT",
        LEFT: "RIGHT",
    },
    {
        TOP: "DOWN",
    },
    {
        TOP: "LEFT",
        RIGHT: "DOWN",
    },
    {
        TOP: "RIGHT",
        LEFT: "DOWN",
    },
    {
        RIGHT: "LEFT",
        LEFT: "RIGHT",
    },
    {
        TOP: "DOWN",
        RIGHT: "DOWN"
    },
    {
        RIGHT: "DOWN",
        LEFT: "DOWN",
    },
    {
        TOP: "DOWN",
        LEFT: "DOWN",
    },
    {
        TOP: "LEFT",
    },
    {
        TOP: "RIGHT",
    },
    {
        RIGHT: "DOWN",
    },
    {
        LEFT: "DOWN",
    }
];

const EX = parseInt(readline());

while (true) {
    const inputs = readline().split(' ');

    let XI = parseInt(inputs[0]);
    let YI = parseInt(inputs[1]);
    let POS = inputs[2];

    let direction = ROOM_TYPE_MAPPING[GRID[YI][XI]][POS];

    if (direction === "DOWN") YI++;
    if (direction === "LEFT") XI--;
    if (direction === "RIGHT") XI++;

    console.log(XI + ' ' + YI);
}
