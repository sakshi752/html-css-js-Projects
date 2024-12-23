// Write a for...of loop inside hasNaN to iterate over the elements of numbers and check if any of them are NaN.
// Return true if the array contains NaN else return false

function hasNaN(numbers) {
    for (const num of numbers) {
        if (Number.isNaN(num)) {
            return true;
        }
    }
    return false;
}

const numbers = [1, 4, NaN, 6, 7, 22, NaN, 0, 23];

console.log(hasNaN(numbers));



// Write a for...of loop inside logChars to iterate over the characters of a given string and log their values to the console.


function logChars(str) {
    for (const ch of str) {
        console.log(ch
            
        );
        
    }
}

logChars("Hello, world!");
logChars("Bonjour!")