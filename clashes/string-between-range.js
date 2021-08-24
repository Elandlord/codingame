const s = readline();
const pattern = readline().split('');

let indexes = pattern.map(letter => s.indexOf(letter)).sort();

console.log(s.slice(indexes[0], indexes[1] + 1));
