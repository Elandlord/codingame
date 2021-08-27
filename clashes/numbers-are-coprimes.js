const a = parseInt(readline());
const b = parseInt(readline());

const areCoprimes = (num1, num2) => {
    const smaller = num1 > num2 ? num1 : num2;
    for(let ind = 2; ind < smaller; ind++){
        const condition1 = num1 % ind === 0;
        const condition2 = num2 % ind === 0;
        if(condition1 && condition2){
            return false;
        };
    };
    return true;
};

console.log(areCoprimes(a, b));