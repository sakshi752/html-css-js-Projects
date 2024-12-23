// Given two variables, a and b, swap their values without using a temporary variable.

function swap(num1, num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp
    return [num1, num2];
}

let num1 = 20;
let num2 = 8;
console.log("before swapp num1, num2",num1,num2);
[num1, num2] = swap(num1, num2); 
console.log("before swapp num1, num2",num1,num2);
