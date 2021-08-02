const surfaceN = parseInt(readline());

for (let i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
}

while (true) {
    var inputs = readline().split(' ');
    const vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.

    console.log(vSpeed <= -40 ? '0 4' : '0 0');
}
