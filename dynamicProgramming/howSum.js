/**
 * Write a function that takes in an array of nums and a targetSum
 * The function should return an array containing the any combination of numbers that add up to the targetSum
 * Any number in the array nums can be used more than once
 * m = target sum
 * n = nums.length
 * Time O(m^2 * n)
 * Space O(m^2)
*/
const howSum = (target, nums, memoized = {}) => {
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
        const result = howSum(remainder, nums);
        if (result !== null) {
            const solution = [...result, num];
            memoized[target] = solution;
            return memoized[target];
        }
    }
    return null;
}

const howSumTabulation = (target, nums) => {
    const table = Array(target + 1).fill(false);
    table[0] = [];
    for (let i = 0; i < table.length; i++) {
        if (table[i]) {
            for (let num of nums) {
                if (i + num < table.length) {
                    table[i + num] = [num, ...table[i]];
                }
            }
        }
    }
    return table[target];
}

console.log(howSumTabulation(7, [5, 3, 4, 7])); // [7]
console.log(howSumTabulation(8, [2, 3, 5])); // [3, 5]
console.log(howSumTabulation(27, [4, 5]));// [4, 4]
console.log(howSumTabulation(100, [1, 2, 5, 25]));// [25, 25, 25, 25]