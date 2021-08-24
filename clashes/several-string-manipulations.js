/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const str1 = readline();
const str2 = readline();

var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    return newLetters;
}

newStr1 = JSON.parse(JSON.stringify(str1));

console.log(str2.includes(str1) ? "True" : "False");

if(str2.indexOf(str1) !== -1) {
    console.log(str2.indexOf(str1));
}

if(str2.lastIndexOf(str1) !== -1) {
    console.log(str2.lastIndexOf(str1));
}

console.log(swapCase(str2));
console.log(str2.trimEnd());
console.log(str2.trimStart());
console.log(str2.trim());