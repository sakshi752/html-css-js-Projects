// Write a function called multiply that takes two parameters. If the second parameter is not provided, it should default to 1. The function should return the product of the two numbers.

const mul = (num1, num2) => {
    return num2 !== undefined ? num1 * num2 : num1 * 1
}

console.log(mul(3))

// Assign a function to a variable named square that calculates the square of a number and returns it.
const returnSq = (num)=>{
    return num*num
}


// Create an anonymous function that takes an array of numbers and returns the sum of all numbers. Assign this function to a variable named calculateSum.
const calculateSum = function(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
};