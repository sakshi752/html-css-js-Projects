// Use the modulus operator to check if a number (e.g., 7) is odd or even. Log "odd" or "even" to the console.

const oddEven = (num) => {
    return num % 2 === 0 ? "even" : "odd"
}

console.log("7 is a ", oddEven(7));
console.log("812 is a ", oddEven(812));

// Declare a variable x with initial value 8. Increment this value by one using the increment operator, then decrement it by one using the decrement operator. Log the result after each operation.
function IncDec(num) {
    this.num = num;
}

IncDec.prototype.increment = function () {
    return this.num += 1;
};

IncDec.prototype.decrement = function () {
    return this.num -= 1;
};
const num = new IncDec(19)
console.log("increment ", num.increment());
console.log("decrement ", num.decrement());
console.log("decrement ", num.decrement());
console.log("num ", num);



