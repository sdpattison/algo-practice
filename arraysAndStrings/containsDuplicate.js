// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const counter = {};
    for (let i = 0; i < nums.length; i++) {
        if (counter[nums[i]]) {
            return true;
        } else {
            counter[nums[i]] = 1;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,4,5,1]));