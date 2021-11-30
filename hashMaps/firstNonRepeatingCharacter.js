/**
 * 
 * Given a string, return the index of the first non repeating character. If every character repeats, return -1
 * 
 * @param {string} string
 * @return {number}
 * O(n) time
 * 
 */
const firstUniqChar = (string) => {
    const charTracker = {};
    let currentLowest = null;
    for (let i = 0; i < string.length; i++) {
        if (typeof charTracker[string[i]] !== 'undefined') {
            charTracker[string[i]] = 'repeating';
        } else {
            charTracker[string[i]] = i;
        }
    }
    
    for (const char in charTracker) {
        if (typeof charTracker[char] === 'number') { 
            if (charTracker[char] < currentLowest || currentLowest === null) {
                currentLowest = charTracker[char];
            }
        }
    }
    return currentLowest === null ? -1 : currentLowest;
};


const firstNonRepeatingCharacterCheating = (string) => {
    const strSet = new Set();
    for (let i = 0; i < string.length; i++) {
        strSet.add(string[i]);
    }

}

console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aadadaad'));