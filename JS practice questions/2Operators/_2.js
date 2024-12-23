// Write a JavaScript program to calculate the sum, difference, multiplication, and division of two numbers (e.g., 8 and 4).

// Note this question can be solved in much easier manner for beginner but i just learned about prototypes in JS so implemented it hehe ☺️

// Constructor function
function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}

Calculator.prototype.sum = function () {
    return this.num1 + this.num2
}

Calculator.prototype.difference = function () {
    return this.num1 > this.num2 ? this.num1 - this.num2 : this.num2 - this.num1
}

Calculator.prototype.multiply = function () {
    return this.num1 * this.num2
}

Calculator.prototype.divide = function () {
    if (this.num2 !== 0) {
        return this.num1 / this.num2;
    } else {
        return "Division by zero is not allowed.";
    }
}

const calc = new Calculator(8,4);
console.log("Sum:", calc.sum());              
console.log("Difference:", calc.difference()); 
console.log("Multiplication:", calc.multiply()); 
console.log("Division:", calc.divide()); 

const calc2 = new Calculator(90,21);
console.log("Sum :P :", calc2.sum());  

