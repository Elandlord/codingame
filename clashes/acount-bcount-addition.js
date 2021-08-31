/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const adigit = parseInt(inputs[0]);
const acount = parseInt(inputs[1]);
var inputs = readline().split(' ');
const bdigit = parseInt(inputs[0]);
const bcount = parseInt(inputs[1]);
const repeats = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.error({adigit, acount, bdigit, bcount, repeats})
response = ""
for (i = 0; i < repeats; i++) {
    a = (adigit + i) % 10
    b = (bdigit + i) % 10
    response += `${a.toString().repeat(acount)}${b.toString().repeat(bcount)}`
}
console.log(response);
