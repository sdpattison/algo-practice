const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) {
        return memo[target];
    }
    if (target === '') {
        return 1;
    }
    let totalCount = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const result = countConstruct(suffix, wordBank, memo); 
            totalCount += result;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}

const countConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i < table.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length];
}

console.log(countConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstructTabulation('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', 
['e', 
'eeeeeeeee', 
'eeee', 
'eeeeeeeeeeee', 
'eeeeeeeeeeeeeeeee'
]
));