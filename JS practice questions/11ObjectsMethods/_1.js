// Create an object called calculator with methods add, subtract, multiply, and divide.
// Each method should take two parameters and return the result of the corresponding mathematical operation.

const calc = {
    addition(num1, num2) { return num1 + num2 },
    subtraction(num1, num2) { return num1 > num2 ? num1 - num2 : num2 - num1 },
    multiply(num1, num2) { return num1 * num2 },
    divide(num1, num2) { return num1 / num2 }
}


