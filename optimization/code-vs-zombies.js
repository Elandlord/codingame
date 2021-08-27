/**
 * Save humans, destroy zombies!
 **/
function distance(x1, y1, x2, y2) {
    let a = x1-x2;
    let b = y1-y2;
    return Math.sqrt(a*a + b*b);
}

class Human {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

class Zombie {
    constructor(id, x, y, xNext, yNext) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.xNext = xNext;
        this.yNext = yNext;
    }
}

while (true) {
    let targetedHumans = [];

    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);

    const humanCount = parseInt(readline());
    let humans = [...Array(humanCount)].map(_ => {
        return new Human(...readline().split(' ').map(v=>parseInt(v)));
    });

    const zombieCount = parseInt(readline());

    let zombies = [...Array(zombieCount)].map(_ => {
        return new Zombie(...readline().split(' ').map(v=>parseInt(v)));
    });

    humans.forEach((human) => {
        zombies.forEach((zombie) => {
            if ((zombie.xNext > human.x - 600 || zombie.xNext < human.x + 600) &&
                (zombie.yNext > human.y - 600 || zombie.yNext < human.y + 600))
                targetedHumans[zombie.id] = human.id
        });
    });

    humans.map((human) => {
        human.closestZombie = zombies.map((zombie) => {
            zombie.distanceToHuman = distance(zombie.x, zombie.y, human.x, human.y);
            return zombie;
        }).sort((zombieA, zombieB) => {
            return zombieB.distanceToHuman - zombieA.distanceToHuman;
        })[0];
    });

    humans.sort((humanA, humanB) => humanB.closestZombie.distanceToHuman - humanA.closestZombie.distanceToHuman);

    if(humans[0].closestZombie === undefined) {
        console.log(`${zombies[0].xNext} ${zombies[0].yNext}`);
        continue;
    }

    console.log(`${humans[0].closestZombie.xNext} ${humans[0].closestZombie.yNext}`);
}
