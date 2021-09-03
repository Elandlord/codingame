[x, y] = [+readline(), +readline()];
let initialX = x;
let counter = 1;
while(x%y!==0) {
    x=x+initialX;
    counter++;
}

console.log(counter);
