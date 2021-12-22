const allConstruct = (target, wordBank) => {
    if (target === '') {
        return [[]];
    }
    const solutions = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const result = allConstruct(suffix, wordBank);
            const allWays = result.map(way => [word, ...way]);
            solutions.push(...allWays);
        }
    }
    return solutions;
}

const allConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];
    for (let i = 0; i < target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const allSolutions = table[i].map(subarray => [...subarray, word]);
                table[i + word.length].push(...allSolutions);
                
            }
        }
    }
    return table[target.length];
}

console.log(allConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstructTabulation('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(allConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', 
['e', 
'eeeeeeeee', 
'eeee', 
'eeeeeeeeeeee', 
'eeeeeeeeeeeeeeeee'
]
));