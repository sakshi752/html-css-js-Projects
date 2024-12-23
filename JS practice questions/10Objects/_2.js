// Write a function that takes an object as an argument and logs all the keys and values of the object.
const printFunction = (object) => {
    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

const book = {
    title: "think straight",
    author: "Darius foroux",
    publishedYear: 2000
}
printFunction(book)

// Create an object to represent a mobile phone, which includes nested objects for dimensions, manufacturer, and storage specifications. Access and log a nested property
