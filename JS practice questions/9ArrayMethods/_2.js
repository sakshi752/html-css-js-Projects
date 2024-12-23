const fruits = [
    { name: 'Apple', color: 'Red', price: 1.5 },
    { name: 'Banana', color: 'Yellow', price: 0.5 },
    { name: 'Orange', color: 'Orange', price: null },
    { name: 'Grapes', color: 'Purple', price: 3 },
    { name: 'Watermelon', color: 'Green', price: 4 },
    { name: 'Strawberry', color: 'Red', price: 2.5 },
    { name: 'Mango', color: 'Yellow', price: null },
    { name: 'Pineapple', color: 'Yellow', price: null },
    { name: 'Cherry', color: 'Red', price: 2 },
    { name: 'Blueberry', color: 'Blue', price: 2.8 }
];

// Filter out the fruits with null price.
const filteredFruits = fruits.filter(fruit=>fruit.price)

// Create a new array updatedPrice from this filtered array with the price of each doubled.
const updatedPriceFruits = fruits.map(fruit => ({
    ...fruit,
    price: fruit.price * 2
}));

// Create a orderPrice variable that stores the sum of all the price of the fruits in updatedPrice.
const orderPrice = updatedPriceFruits.reduce((sum, fruit) => sum + fruit.price, 0);


console.log("filteredFruits",filteredFruits)
console.log("updatedPriceFruits",updatedPriceFruits)
console.log("order Price",orderPrice)