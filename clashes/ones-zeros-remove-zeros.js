const N = parseInt(readline());

let rows = [...Array(N)].map(_ => readline().split('').map(row => row.replace('0', '-')).join(''));
console.log(rows.join('\n'));