// Write a JavaScript program that uses a for loop to log numbers from 1 to 10.
function printNTimes(times) {
    for (let i = 0; i < 100; i++) {
        console.log(i + 1);
    }
}

// Use a while loop to calculate the sum of numbers from 1 to 100.
function sumUpto100() {
    let i = 1
    let total = 0
    while (i > 100) {
        total += i;
        i++
    }
    return total
}

// Use a while loop to sum numbers from 1 to infinity, but break the loop when the sum reaches or exceeds 1000. Log the final sum.
function dummyFunc() {
    let i = 1
    let total = 0
    while (true) {
        if (total < 1000) {
            total += i;
            i++
        }
        break

    }
    return total
}

// Given an array of integers, use a loop to find the largest number. Enhance it by ignoring negative numbers using the continue statement.
function findLargest(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            continue;
        } else if (arr[i] > largest){
            arr[i] = largest
        }
    }
}

// Create a for loop that skips even numbers from 1 to 20 using the continue statement and logs only odd numbers.
function printOdds(){
    for (let i = 1; i <= 20; i++) {
        if (i%2===0) {
            continue
        } else{
            console.log("odd-",i);
            
        }
    }
}