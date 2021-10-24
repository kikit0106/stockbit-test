/**
 * USER query example for question no.1
 *
 * @returns {string}
 */
function userQuery() {
    const fs = require('fs');
    const path = require('path');

    return fs.readFileSync(path.resolve(__dirname, 'USER.sql'), 'utf8');
}

/**
 * Refactor code for question no.3
 *
 * @param {string} str
 * @returns {string}
 */
function findFirstStringInBracketV2(str){
    let result = '';

    if (str.length > 0) {
        let firstBracketIndex = str.indexOf("("),
            closingBracketIndex = str.indexOf(")"),
            isHasStringInside = (firstBracketIndex < closingBracketIndex)
                && (closingBracketIndex - firstBracketIndex > 1);

        if (isHasStringInside) {
            result = str.substring(firstBracketIndex+1,closingBracketIndex);
        }
    }
    return result;
}

/**
 * Logic test to do grouping anagram words for question no.4
 *
 * @param {array} sample
 * @returns {array}
 */
function groupingAnagram(sample){
    let result = [],
        data = Array.isArray(sample) ? sample : [];

    data.forEach((item) => {
        let skipChecking = false;

        result.forEach((group) => {
            if (group.includes(item)){
                skipChecking = true;
            }
        });

        if (!skipChecking) {
            let temp = [item];
            data.forEach((word) => {
                let isSameLetter = item.length === word.length
                    && item.split("").sort().join() === word.split("").sort().join(),
                    isAnagram = item !== word && isSameLetter;

                if (isAnagram){
                    temp.push(word);
                }
            });

            result.push(temp);
        }
    });

    return result;
}

module.exports= {findFirstStringInBracketV2, groupingAnagram, userQuery};