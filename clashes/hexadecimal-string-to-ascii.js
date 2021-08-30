const valueCount = parseInt(readline());

function hex2a(hexx) {
    let hex = hexx.toString();
    let str = '';
    for (let i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

console.log(readline().split(' ').map(n => {
    return hex2a(n)
}).join(''));
