/**
 * Write a function that takes in an array of nums and a targetSum
 * The function should return an array containing the shortest combination of numbers that add up to the targetSum
 * If there is a tie for the shortest you may return any of the shortest
 * m = target sum
 * n = nums.length
 * Time O(m^2 * n)
 * Space O(m^2)
*/
const bestSum = (target, nums, shortestSolution = null, memoized = {}) => {
    if (target in memoized) {
        return memoized[target];
    }
    if (target === 0) {
        return [];
    }
    if (target < 0) {
        return null;
    }
    
    for (let num of nums) {
        const remainder = target - num;
        const result = bestSum(remainder, nums, shortestSolution, memoized);
        if (result) {
            const solution = [...result, num];
            if (!shortestSolution || solution.length < shortestSolution.length) {
                shortestSolution = solution;
            }
            memoized[target] = solution;
        }
    }
    return shortestSolution;
}

const bestSumTabulation = (target, nums) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i < table.length; i++) {
        if (table[i]) {
            for (let num of nums) {
                const potentialTarget = i + num;
                if (potentialTarget < table.length) {
                    const possibleSolution = [num, ...table[i]];
                    if (!table[potentialTarget] || table[potentialTarget].length > possibleSolution.length) {
                        table[potentialTarget] = possibleSolution;
                    }
                }
            }
        }
    }
    return table[target];
}

console.log(bestSumTabulation(7, [5, 3, 4, 7])); // [7]
console.log(bestSumTabulation(8, [2, 3, 5])); // [3, 5]
console.log(bestSumTabulation(8, [1, 4, 5]));// [4, 4]
console.log(bestSumTabulation(100, [1, 2, 5, 25]));// [25, 25, 25, 25]