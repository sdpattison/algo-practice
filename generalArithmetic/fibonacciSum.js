const fibonacciSum = (max) => {
    let prev = 0;
    let next = 1;
    let temp;
    let sum = 0;

    while (next <= max) {
        if (next % 2 === 0) {
            sum += next;
        }
        temp = next;
        next += prev;
        prev = temp;
    }
    return sum;
}

console.log(fibonacciSum(4000000));