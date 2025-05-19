const { Console } = require("console");

function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}

var nameStr = 'nitan';
console.log(reverseString(nameStr)); // Output: 'natin'


function findLongestWord(string1){
    
    const words = string1.split(' ')
    let longestWord = ""
    for(let word of words){
        if(word.length>longestWord.length){
        longestWord = word
        }
    } return longestWord
}
let sentence = "I love coding in JavaScript."
console.log('Longest word is:',findLongestWord("I love coding in JavaScript."))