const n = parseInt(readline());

let numbers = [...Array(n)].map(_ => readline());

let numbersCopy = JSON.parse(JSON.stringify(numbers));

let orderedNumbers = numbersCopy.sort((a,b) => a.length - b.length);

let amount = orderedNumbers[orderedNumbers.length - 1].length;

numbers.forEach(num => console.log(num.padStart(amount, '0')));
