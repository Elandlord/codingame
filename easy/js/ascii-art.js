class Helper {
    // regular expression that returns true for all letters
    characterIsALetter(char) {
        return (/[a-zA-Z]/).test(char)
    }
}

const helper = new Helper();

const letterWidth = parseInt(readline()); // Contains width of ASCII art
const letterHeight = parseInt(readline()); // Contains height of ASCII art
const lineToTransformToAscii = readline();

const lettersToTransform = lineToTransformToAscii.toUpperCase().split(''); // Turn line of text into array
const alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?'.split(''); // Create array of alphabetical letters

// Initialize map, that contains the alphabetical letters
const alphabetMap = {};
alphabetArray.forEach( (letter) => {
    alphabetMap[letter] = [];
});

// For the height of the ASCII art, set the ASCII art for each alphabetical letter
const characters = [...Array(letterHeight)].map( (charRow, rowIndex) => {
    let row = readline();

    alphabetArray.forEach( (letter, letterIndex) => {
        alphabetMap[letter][rowIndex] = row.substr(letterIndex * letterWidth, letterWidth);
    });
});


// Loop over height
let result =[...Array(letterHeight)].map( (letterRow, rowIndex) => {
    let asciiRow = lettersToTransform.map( (letter) => {
        if ( !helper.characterIsALetter(letter)) {
            return alphabetMap["?"][rowIndex]; // Return ? when character is not a letter
        }

        return alphabetMap[letter][rowIndex];
    }).join("");

    return asciiRow + '\n';
}).join("");

console.log(result);


