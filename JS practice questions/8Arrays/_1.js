// Write a JavaScript program that creates an array containing the days of the week and logs the entire array.
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// Log the entire array
console.log(daysOfWeek);

// Create an array containing the names of five fruits. Log the first and last fruit in the list.
const fruits = ['apple', 'banana', 'kiwi', 'orange', 'pineapple']
console.log(fruits[0], fruits[1]);


// Given an array of three colors (["Red", "Green", "Blue"]), change the second element to "Yellow" and log the updated array.
const colors = ["Red", "Green", "Blue"];
colors[1] = "Yellow"
console.log(colors);

// Use a for loop to iterate over an array of numbers (e.g., [1, 2, 3, 4, 5]) and log each number multiplied by 2.
const arr = [1, 2, 3, 4, 5]
arr.forEach(item => {
    console.log(item);
})

// Given an array [1, 2, 3, 4, 5, 6], use slice to create a new array that excludes the first and last element. Then use splice to remove the second and third elements from the original array and log both arrays.
const egArr = [1, 2, 3, 4, 5, 6] 
const newArr = egArr.slice(1,5)
const newArr2 = egArr.splice(1,2)
console.log("newArr",newArr);
console.log("newArr2",newArr2);
