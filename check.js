const answer = require('./task/answer');

console.log("Soal no.1 - user query:");
console.log(answer.userQuery());
console.log("===========");
console.log("Soal no.3 - refactor first string in bracket: pikiring (waskitha) hutama ");
console.log(answer.findFirstStringInBracketV2('pikiring (waskitha) hutama'));
console.log("===========");
console.log("Soal no.4 - grouping anagram:");
console.log(answer.groupingAnagram(['kita', 'atik', 'tika','aku', 'kia', 'makan' ,'kua']));
console.log("===========");