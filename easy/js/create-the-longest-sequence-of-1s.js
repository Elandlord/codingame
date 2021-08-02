const b = readline();

let cur = 0, pre = 0, max = 0;

for (let i = 0; i < b.length; i++) {

    if (b[i] === '1') {
        cur++;
    } else {
        pre = b[i + 1] !== '1' ? 0 : cur;
        cur = 0;
    }
    max = Math.max(pre + cur, max);
}

print(max + 1);