const readline = require('readline-sync');

const userString = readline.question('Please input a word here: ');
const userString2 = readline.questionInt('Please select an index number: ');
const wordIndex = userString[userString2];

console.log(wordIndex);