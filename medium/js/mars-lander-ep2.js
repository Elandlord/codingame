const [MARS_GRAVITY, maxHSpeed, maxVSpeed] = [3.711, 20, 40];
const rad2deg = radians => radians * 180 / Math.PI;

let surfaceN = parseInt(readline());

let [lastX, lastY, startX, endX, landingY] = Array(5).fill(-1);

[...Array(surfaceN)].forEach(_ => {
    const [landX, landY] = readline().split(' ').map(Number);

    if(lastY === landY && -1 === startX) {
        [startX, landingY] = [lastX, landY];
    } else if (-1 !== startX && -1 === endX) {
        endX = lastX;
    }

    [lastX, lastY] = [landX, landY];
});


while (true) {
    var [x,y, hSpeed, vSpeed, fuel] = readline().split(' ').map(v => parseInt(v));

    const speed = Math.sqrt(Math.pow(hSpeed, 2) + Math.pow(vSpeed, 2));
    const aimAngle = rad2deg(Math.acos(MARS_GRAVITY / 4));

    let rotationAngle = 0;
    let power = 4;

    let isBetween = !(startX <= x && x <= endX);

    if (isBetween) {
        if ((x < startX && hSpeed < 0) || (endX < x && hSpeed > 0)|| Math.abs(hSpeed) > 4 * maxHSpeed) rotationAngle = Math.floor(rad2deg(Math.asin(hSpeed / speed)));
        if (Math.abs(hSpeed) < 2 * maxHSpeed) rotationAngle = Math.floor(((x < startX) ? -aimAngle : (endX < x) ? aimAngle : 0));
        if (vSpeed >= 0) power = 3;
    } else {
        if (y < 200 + landingY) power = 3;
        else if (Math.abs(hSpeed) <= maxHSpeed - 5 && Math.abs(vSpeed) <= maxVSpeed - 5) power = 2;
        else rotationAngle = Math.floor(rad2deg(Math.asin(hSpeed / speed)));
    }

    console.log(rotationAngle, power);
}
