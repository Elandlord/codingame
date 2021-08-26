const str = readline();

function reverse(s) {
    var o = [];
    for (var i = 0, len = s.length; i <= len; i++)
        o.push(s.charAt(len - i));
    return o.join('');
}

function isPalindrome(word, words) {
    return word === reverse(word) && !words.includes(word)
}

function getPalindromes(s) {
    let subStrings = [];
    for (let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length - i; j++) {
            let subString = s.substring(j, j + i + 1);
            if(isPalindrome(subString, subStrings)) {
                subStrings.push(subString);
            }
        }
    }
    return subStrings;
}

let palindromes = getPalindromes(str);

let longestPalindromeLength = getPalindromes(str).reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
).length;

palindromes.filter(palindrome => palindrome.length === longestPalindromeLength).forEach(palindrome => console.log(palindrome));

// Solution 2 (more robust)
function findPalindromes(strToSearch) {
    let currentLongest = [0, 1];
    return [...Array(strToSearch.length)].map((_, i) => {
        const odd = getSurroundingCharacters(strToSearch, i, i+2); // odd = letter is the center
        const even = getSurroundingCharacters(strToSearch, i, i+1);  // even = between letters
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; // choosing the longest palindrome
        currentLongest = currentLongest[1] - currentLongest[0] > longest [1] - longest[0] ?  currentLongest : longest // comparing palindromes
        return strToSearch.slice(currentLongest[0], currentLongest[1]);
    });
};

function getSurroundingCharacters(strToSearch, leftId, rightId){
    while (leftId >= 0 && rightId < strToSearch.length){
        if(strToSearch[leftId] !== strToSearch[rightId]) break;
        leftId--;
        rightId++;
    }
    return[leftId + 1, rightId]
}

const strToSearch = readline();

let palindromes = findPalindromes(strToSearch);

palindromes.filter(palindrome => palindrome.length === Math.max(...palindromes.map(palindrome => palindrome.length)))
    .filter((palindrome, index, self) => {
        return self.indexOf(palindrome) === index;
    })
    .forEach(palindrome => console.log(palindrome));