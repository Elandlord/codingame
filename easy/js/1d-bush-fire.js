const amountTests = parseInt(readline());

let tests = [...Array(amountTests)].map(_ => readline());
let chunksThatNeedDrops = tests.map(line => line.match(/f.f|f{1,2}/g));

chunksThatNeedDrops.forEach(chunks => console.log(chunks !== null ? chunks.length : 0));