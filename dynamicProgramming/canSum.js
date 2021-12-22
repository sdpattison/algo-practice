/**
 * Write a function that takes in an array of nums and a targetSum
 * The function should true if the targetSum can be created by the nums in the array
 * Any num in the array nums, can be used more than once
 * m = target sum
 * n = nums.length
 * Time O(m^2 * n)
 * Space O(n)
*/
const canSum = (target, nums) => {
    if (target === 0) {
        return true;
    }
    if (target < 0) {
        return false;
    }

    for (let num of nums) {
        const remainder = target - num;
        const result = canSum(remainder, nums);
        if (result) {
            return true;
        }
    }

    return false;
}

const canSumTabulation = (target, nums) => {
    const table = Array(target + 1).fill(false);
    table[0] = true;
    for (let i = 0; i < table.length; i++) {
        if (table[i] === true) {
            for (let num of nums) {
                if (num + i < table.length) {
                    table[num + i] = true;
                }
            }
        }
    }
    return table[target];
}

console.log(canSumTabulation(7, [5, 3, 4, 7])); // true
console.log(canSumTabulation(8, [2, 3, 5])); // true
console.log(canSumTabulation(8, [1, 4, 5]));// true
console.log(canSumTabulation(3, [2, 5]));// false