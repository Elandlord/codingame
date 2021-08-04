const numberHorses = parseInt(readline());

const horseStrengths = [...Array(numberHorses)].map( _ => parseInt(readline()));

let answer = Math.abs(horseStrengths[0] - horseStrengths[1]);

horseStrengths.sort().forEach( (horseStrength, index) => {
    let next = horseStrengths[index + 1];
    let diffPrevious = Math.abs(horseStrength - next);

    if (diffPrevious < answer) answer = diffPrevious;
});

console.log(answer);
