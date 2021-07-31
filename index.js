// @ts-check

// Util functions
const isOdd = (number) => number % 2 === 1;
const isEven = (number) => number % 2 === 0;

/**
 * This function multiplies the number with 3 and adds 1 if the number is odd. Incase of even it divides it by 2.
 * @param {number} number
 */
function solve(number) {
    if (isOdd(number)) {
        // if its odd, we multiply by 3 and add 1
        return 3 * number + 1;
    }
    // If its even, we can just divide by 2
    return number / 2;
}

/**
 * This function recurrsively calls solve functions and pushes the result to an array until the result is 1.
 * And then returns the array.
 * @param {number} input
 * @returns {Array<number>}
 */
function getData(input = 27) {
    let some = input
    let arr = [input]
    while (!(some === 1)) {
        some = solve(some)
        arr.push(some)
    }
    return arr
}