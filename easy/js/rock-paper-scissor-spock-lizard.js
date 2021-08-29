const lookUpTable = {
    'C': ['P', 'L'],
    'P': ['R', 'S'],
    'R': ['L', 'C'],
    'L': ['S', 'P'],
    'S': ['C', 'R'],
};

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

class Player {
    constructor(id, sign) {
        this.id = id;
        this.sign = sign;
        this.wins = 0;
        this.opponents = [];
    }
}

let players = [...Array(parseInt(readline()))].map(_ => new Player(...readline().split(' '))); 

let count = players.length / 2;

for(let i = 1; i <= count; i++) {
    players = sliceIntoChunks(players, 2);

    players = players.map(playerGroup => {
        if(playerGroup.length !== 2) return playerGroup; // The later tests fail. Technically, the group length should always be 2.

        let playerSign = playerGroup[0].sign;
        let opponentVulnerableSigns = lookUpTable[playerSign];
        let opponentSign = playerGroup[1].sign;
        let playerVulnerableSigns = lookUpTable[opponentSign];

        playerGroup[0].opponents.push(playerGroup[1].id);
        playerGroup[1].opponents.push(playerGroup[0].id);

        if(opponentVulnerableSigns.includes(opponentSign)) {
            playerGroup[0].wins++;
            playerGroup.splice(1, 1);
            return playerGroup;
        }

        if(playerVulnerableSigns.includes(playerSign)) {
            playerGroup[1].wins++;
            playerGroup.splice(0, 1);
            return playerGroup;
        }

        if(playerGroup[0].id < playerGroup[1].id) {
            playerGroup[0].wins++;
            playerGroup.splice(1, 1);
            return playerGroup;
        } else {
            playerGroup[1].wins++;
            playerGroup.splice(0, 1);
            return playerGroup;
        }
    }).flat();
} 

console.log(players[0].id);
console.log(players[0].opponents.join(' '));