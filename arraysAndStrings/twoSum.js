// Given an array of integers, determine whether there is a combination of integers that will add up to the target sum and return an array containing the indicies of those integers

// O(n) time
const twoSum = (array, targetSum) => {
    const nums = {};

    for (let i = 0; i < array.length; i++) {
        const difference  = targetSum - array[i];
        
        if (!nums[difference]) {
            nums[array[i]] = i;
        } else {
            return [nums[difference], i];
        }
    }
    return [];
}

console.log(twoSum([1,3,2,6,10], 12));