// Using compound assignment operators (+=, -=, *=, /=), perform and log the following operations on a variable a starting with 10: add 5, subtract 3, multiply by 2, and divide by 4.
function compoundOperators(num) {
    num += 5;
    num -= 3
    num *= 2
    return num /= 4
}

console.log("num 10 after operations ", compoundOperators(10));

// Write a program that compares two variables, a (10) and b (20), using all comparison operators (==, ===, !=, !==, >, <, >=, <=) and logs the results.
function comparisonOperators(num1, num2) {

}

// Use logical operators to determine if a variable age (25) is between 18 and 60, including both limits. Log "Valid age" if true, otherwise "Invalid age"
function returnValidAge(age) {
    return age >= 18 && age <= 60 ? "Valid age" : "Not Valid Age"
}