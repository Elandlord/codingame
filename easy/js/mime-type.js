const numLookupTable = parseInt(readline());
const numFiles = parseInt(readline());

let mimeMap = {};

[...Array(numLookupTable)].forEach( (num) => {
    let fileName = readline().split(' ');
    mimeMap[fileName[0].toLowerCase()] = fileName[1];
});

[...Array(numFiles)].forEach( (num) => {
    let fileName = readline();
    let group = fileName.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);

    let extension = group && group[1].toLowerCase();

    if (extension && mimeMap[extension]) {
        console.log(mimeMap[extension]);
        return;
    }

    console.log('UNKNOWN')
});