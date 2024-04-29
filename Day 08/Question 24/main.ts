// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

//Using the upper case function
console.log("Testing with upper case:");
console.log("Apple".toUpperCase() == "apple"); //false
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False

// Test whether an item is in a array
let fruits =  ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(fruits.includes("mango")); // True