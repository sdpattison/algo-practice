const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) {
        return memo[target];
    }
    if (target === '') {
        return true;
    }
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

const canConstructTablulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
        const current = table[i];
        if (current) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}

console.log(canConstructTablulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstructTablulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstructTablulation('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructTablulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', 
['e', 
'eeeeeeeee', 
'eeee', 
'eeeeeeeeeeee', 
'eeeeeeeeeeeeeeeee'
]
));