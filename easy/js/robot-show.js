const [ductLength, botsNumber] = [readline(), readline()].map(value => parseInt(value));

let locations = readline().split(' ').map( location => parseInt(location));
let [min, max] = [Math.min(...locations), Math.max(...locations)];

console.log(Math.max(ductLength - min, max));