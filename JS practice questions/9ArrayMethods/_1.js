const numbers = [15, 25, 35, 45, 55, 65]

let total = 0
numbers.forEach(num => total += num);


const reduceTotal = numbers.reduce((num, sum) => sum += num, 0)
console.log(reduceTotal)


const ingredients = [
    { name: "Dough", quantity: 1, price: 2.5 },
    { name: "Tomato Sauce", quantity: 1, price: 1.0 },
    { name: "Cheese", quantity: 2, price: 3.0 },
    { name: "Pepperoni", quantity: 10, price: 2.5 },
    { name: "Mushrooms", quantity: 8, price: 1.5 },
    { name: "Green Peppers", quantity: 5, price: 1.0 },
    { name: "Onions", quantity: 4, price: 0.75 },
    { name: "Olives", quantity: 6, price: 1.25 },
    { name: "Bacon", quantity: 3, price: 2.0 },
    { name: "Sausage", quantity: 5, price: 2.5 },
];

// Given an array ingredients, calculate the total cost using .reduce.
const totalPrice = ingredients.reduce((sum, ingre) => sum + ingre.price * ingre.quantity, 0);

console.log(totalPrice);