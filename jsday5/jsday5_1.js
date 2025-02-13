import  methods  from "./jsday5_2.js";


// ----------------------------------------------------------------------------------------------------------------------------------


// Filter unique array members using Set
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(nums)];
console.log("Original array:", nums);
console.log("Unique numbers:", uniqueNums);

// Another example with strings
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'mango'];
const uniqueFruits = Array.from(new Set(fruits));
console.log("Original fruits:", fruits);
console.log("Unique fruits:", new Set(fruits));






// ----------------------------------------------------------------------------------------------------------------------------------


// Example of a class with static functions
class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }

    static power(base, exponent) {
        return Math.pow(base, exponent);
    }
}

const calc = new Calculator();

// Call class name
console.log("\nCalling static methods through class name:");
console.log("Static Add:", Calculator.add(15, 5));
console.log("Static Subtract:", Calculator.subtract(15, 5)); 
console.log("Static Multiply:", Calculator.multiply(15, 5));
console.log("Static Divide:", Calculator.divide(15, 5));
console.log("Static Power:", Calculator.power(3, 2));

// Call using instance 
console.log("\nCalling static methods through instance :");
console.log("Instance Add:", calc.constructor.add(20, 10));
console.log("Instance Subtract:", calc.constructor.subtract(20, 10));
console.log("Instance Multiply:", calc.constructor.multiply(20, 10));
console.log("Instance Divide:", calc.constructor.divide(20, 10));
console.log("Instance Power:", calc.constructor.power(4, 2));






// ----------------------------------------------------------------------------------------------------------------------------------


// Flattening a nested array using arrow functions
const flattenArray = (arr) => arr.reduce((flat, item) => 
    Array.isArray(item) ? [...flat, ...flattenArray(item)] : [...flat, item], 
[]);

const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];
console.log("\nOriginal nested array:", nestedArray);
console.log("\nFlattened array:", flattenArray(nestedArray)); 








// ----------------------------------------------------------------------------------------------------------------------------------


// Using imported methods methods
const radius = 5;
const length = 10;
const width = 8;
const height = 15;

// circle area
const circleArea = methods.circleArea(radius);
console.log(`Area of circle: ${circleArea}`);

// rectangle area
const rectArea = methods.rectangleArea(length, width);
console.log(`Area of rectangle : ${rectArea}`);

// surface area
const cylinderArea = methods.cylinderArea(radius, height);
console.log(`Surface area of cylinder: ${cylinderArea}`);






// ----------------------------------------------------------------------------------------------------------------------------------


// remove duplicate elements from an array
const numbers = [1, 2, 2, 3, 3, 4, 5, 5];

const uniqueNumbers = methods.filterUnique(numbers);
console.log("Original array:", numbers);
console.log("Array with unique elements:", uniqueNumbers);
