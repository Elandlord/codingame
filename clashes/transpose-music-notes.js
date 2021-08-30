const note = readline();
const T = parseFloat(readline());

let number = note.toLowerCase().charCodeAt(0) - 97;
let calc = number+T;

if(calc % 1 === 0) {
    console.log(String.fromCharCode(97 + calc).toUpperCase());
    return;
}

let char = String.fromCharCode(97 + calc).toUpperCase();

if(char === 'E' || char === 'B') {
    console.log(String.fromCharCode(97 + calc + 1).toUpperCase());
} else {
    console.log(char+"#");
}

