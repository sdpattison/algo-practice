/**
* Given a string, return the first repeating character. If there is no repeating character, return -1
*
* @param {string} string
* @return
* O(n) time
*/
const firstRepeatingCharacter = (string) => {
    const chars = {};
    for (let i = 0; i < string.length; i++) {
        if (!chars[string[i]]) {
            chars[string[i]] = true;
        } else {
            return string[i];
        }
    }
    return -1;
}

console.log(firstRepeatingCharacter('hellothere'));