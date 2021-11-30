/**
 * 
 * Given an array of integers, return whether the array is monotonic or not. Meaning the array is entirely non-decreasing or non-increasing
 * 
 * @param {number[]} array
 * @return {boolean}
 * O(n) time
 */
const isMonotonic = (array) => {
    if (array.length <= 1) return true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            return increasingHelper(array, i);
        } else if (array[i] < array[i - 1]) {
            return decreasingHelper(array, i);
        }
    }
    return true;
}

const increasingHelper = (array, i) => {
    for (i; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false
        }
    }
    return true;
}

const decreasingHelper = (array, i) => {
    for (i; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            return false
        }
    }
    return true;
}