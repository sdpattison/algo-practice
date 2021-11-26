const mergeSortedArrays = (array1, array2) => {
    const combinedArray = [];
    let i = 0, j = 0;
    while (array1[i] && array2[j]) {
        if (array1[i] < array2[j]) {
            combinedArray.push(array1[i]);
            i++
        } else {
            combinedArray.push(array2[j]);
            j++
        }
    }
    if(!array1[i]) {
        combinedArray.push(...array2.slice(j));
    } else {
        combinedArray.push(...array1.slice(i));
    }
    return combinedArray;
}

console.log(mergeSortedArrays([1,3,5,6,6], [2,4,6,7,9,10]));