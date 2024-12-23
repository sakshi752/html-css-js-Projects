// write a program to check weather a num is positive negative or 0
function checkInt(num) {
    if (num > 0) {
        return "positive"
    } else if (num < 0) {
        return "negative"
    } else {
        return "zero"
    }
}

// Write a JavaScript program that checks if a person is eligible for a discount. A person is eligible if they are a member of the "Premium Customer" club and have made purchases over $500. Use nested if statements to determine this.
function isDiscountEligible(isPremiumCustomer, totalPurchase) {
    if (isPremiumCustomer) {
        if (totalPurchase > 500) {
            console.log("The person is eligible for a discount.");
        } else {
            console.log("The person is not eligible for a discount. Purchases are below $500.");
        }
    } else {
        console.log("The person is not eligible for a discount. Not a Premium Customer.");
    }
}

// Determine if a year (e.g., 2024) is a leap year. A year is a leap year if it is divisible by 4 but not by 100, or it is divisible by 400. Use logical operators (&&, ||) in your conditional checks.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "This year is a leap year";
    } else {
        return "This is not a leap year";
    }
}

// Use a switch case to log the name of the day based on a number (1-7, where 1 = Monday, 2 = Tuesday, etc.).
function printDay(day) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day"; // Handles numbers outside the range 1-7
    }
}