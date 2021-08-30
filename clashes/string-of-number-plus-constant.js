var inputs = readline().split(' ');
const N = parseInt(inputs[0]);
const R = parseInt(inputs[1]);

let numbers = [...Array(N)].map((_, index) => {
    return index * R;
}, 0);

console.log(numbers.join(' '));