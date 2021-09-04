const N = readline();
const T = readline();

let newString = [];

N.split('').map((l, index) => {
    newString[l] = T.split('')[index]
});

console.log(newString.filter(Boolean).join(''))
