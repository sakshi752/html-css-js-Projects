// Create an object to represent a mobile phone, which includes nested objects for dimensions, manufacturer, and storage specifications. Access and log a nested property.
const phone = {
    model: "A22",
    manufacturer: {
        name: "Samsung",
        country: "INDIA"
    },
    dimensions: {
        height: "157.7mm",
        width: "71.2mm",
        thickness: "7.9mm",
    },
    storage: {
        internal: "128GB",
        expandable: "Up to 1TB",
    },
}
console.log(`Manufacturer Name: ${phone.manufacturer.name}`);
console.log(`Internal Storage: ${phone.storage.internal}`);

// Create an object for a user with properties name, age, and email. Delete the email property and log the resulting object.
const personalDetails = {
    name:"Sakshi",
    age:22,
    email:"saks@gmail.com"
}

delete personalDetails.email
console.log(personalDetails)