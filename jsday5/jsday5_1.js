import  methods  from "./jsday5_2.js";
import filterUnique from "./jsday5_3.js";

// ----------------------------------------------------------------------------------------------------------------------------------


// Filter unique array members using Set

// working -
// firstly I have created a set of the array
// then converting the set to an array using spread operator
// finally returning the array
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(nums)];
console.log("Original array:", nums);
console.log("Unique numbers:", uniqueNums);



// ----------------------------------------------------------------------------------------------------------------------------------


// Example of a class with static functions

// working -
// firstly creating a class with static methods
// then adding static methods to the class
// then calling the static methods using the class name
// finally calling the static methods using the instance of the class


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

// Call using class name
console.log("\nCalling static methods through class name:");
console.log("Static Add:", Calculator.add(15, 5));
console.log("Static Subtract:", Calculator.subtract(15, 5)); 
console.log("Static Multiply:", Calculator.multiply(15, 5));
console.log("Static Divide:", Calculator.divide(15, 5));
console.log("Static Power:", Calculator.power(3, 2));

// Call using instance (for calling using instance i have used constructor of the class
console.log("Calling static methods through instance :");
console.log("Instance Add:", calc.constructor.add(20, 10));
console.log("Instance Subtract:", calc.constructor.subtract(20, 10));
console.log("Instance Multiply:", calc.constructor.multiply(20, 10));
console.log("Instance Divide:", calc.constructor.divide(20, 10));
console.log("Instance Power:", calc.constructor.power(4, 2));






// ----------------------------------------------------------------------------------------------------------------------------------


// Flattening a nested array using arrow functions

// function working -
// I am using reduce function to flatten the array
// then checking if the item is an array or not
// if it is an array then i am calling the function to flatten the array
// if it is not an array then i am pushing the item in the array
// finally returning the flattened array
const flattenArray = (arr) => arr.reduce((flat, item) => 
    Array.isArray(item) ? [...flat, ...flattenArray(item)] : [...flat, item], 
[]);

const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];
console.log("nested array:", nestedArray);
console.log("flattened array:", flattenArray(nestedArray)); 








// ----------------------------------------------------------------------------------------------------------------------------------


// Using imported methods 
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

// using imported method filterUnique
const numbers = [1, 2, 2, 3, 3, 4, 5, 5];

const uniqueNumbers = filterUnique(numbers);
console.log("Original:", numbers);
console.log("Filtered Array :", uniqueNumbers);



// ----------------------------------------------------------------------------------------------------------------------------------


// Filter anagrams using Map.

// working -
// creating empty map
// then sorting each individual word 
// then checking with if condition that is it present in map or not 
// if not present then setting it as a key and value as an array
// if present then pushing the word in the array of that key
// finally returning the array of words from the map 
function filterAnagrams(wordArray) {
    let map = new Map();

    for (let word of wordArray) {
        let sortedWord = word.split('').sort().join('');

        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }
        map.get(sortedWord).push(word);
    }

    return Array.from(map.values());
}


const testSet = ["listen", "silent", "enlist", "rat", "tar", "art", "evil", "vile", "live"];
console.log(filterAnagrams(testSet));




// ----------------------------------------------------------------------------------------------------------------------------------


// Write a program to implement inheritance upto 3 classes.The Class must contain private and public variables and static functions.

// working -
// firstly creating a class with private and public variables
// then creating a class that extends the first class
// then creating a class that extends the second class
// finally calling the static methods using the class name


class Product {
    name;
    #cost;

    constructor(name, cost) {
        this.name = name;
        this.#cost = cost;
    }

    static description() {
        console.log("Products class");
    }

    getCost() {
        return this.#cost;
    }

    displayProductInfo() {
        console.log(`${this.name}  => $ ${this.getCost()}.`);
    }
}

class Furniture extends Product {
    material;

    constructor(name, cost, material) {
        super(name, cost);
        this.material = material;
    }

    static feature() {
        console.log("Furniture class");
    }

    displayFurnitureInfo() {
        this.displayProductInfo();
        console.log(`Material => ${this.material}`);
    }
}

class Sofa extends Furniture {
    size;

    constructor(name, cost, material, size) {
        super(name, cost, material);
        this.size = size;
    }

    static comfort() {
        console.log("sofa class.");
    }

    displaySofaInfo() {
        this.displayFurnitureInfo();
        console.log(`Size => ${this.size}`);
    }
}

Product.description();
Furniture.feature();
Sofa.comfort();

let sofa = new Sofa("Luxury Sofa", 1200, "Leather", "Large");

sofa.displaySofaInfo();

