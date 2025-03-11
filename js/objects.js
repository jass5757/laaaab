const output = document.getElementById('output');

// STEP 1: Create the person object
let person = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar"
    },
    age: 16,
    gender: "Male",
    address: "1 Georgian Drive",
    interests: ["swimming", "reading", "dancing"],
    greeting: function () {
        console.log(`Hello ${this.name.firstName}, How are you?`); // Changed from alert to console.log
    },
    bio: function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, living at ${this.address} are ${this.interests.join(", ")}.`;
    }
};

// STEP 5a: Display the bio in the output element
if (output) {
    output.textContent = person.bio();
} else {
    console.error("Element with id 'output' not found.");
}

// STEP 7: Access address using bracket notation
console.log(person["address"]);

// STEP 8: Update age
person.age = 80;

// STEP 9a: Add eye color
person.eyeColor = "Green";

// STEP 9b: Add a goodbye function
person.goodbye = function () {
    console.log(`This is ${this.name.firstName} signing off!`); // Changed from alert to console.log
};

// STEP 10: Dynamically set hair color
let key = "hairColor";
let value = "Black";
person[key] = value;

// STEP 11a: Create two new objects with name and hello function
let person1 = {
    name: "P1",
    hello: function () {
        console.log(`Hello, this is ${this.name}.`); // Changed from alert to console.log
    }
};

let person2 = {
    name: "P2",
    hello: function () {
        console.log(`Hello, this is ${this.name}.`); // Changed from alert to console.log
    }
};

// STEP 11b: Call the hello function for both objects
person1.hello();
person2.hello();
