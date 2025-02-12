
// provide an example for each ES6 feature as exercise .
// Let and const
// Block Scoping
// Destructuring
// Spread Operator
// Arrow Function
// Template String/Literal



// 1. Let and Const
let age = 25; 
age = 26;
const PI = 3.14159; 
console.log("Age:", age);
console.log("PI:", PI);



// 2. Block Scoping
{
    let blockScope = "inside block";
    console.log(blockScope);
}
// console.log(blockScope); 



// 3. Destructuring
// Array Destructuring
const nums = [1, 2, 3, 4, 5];
const [f, s, ...rest] = nums;
console.log("First:", f);
console.log("Second:", s);
console.log("Rest:", rest);

// Object Destructuring
const person = {
    name: "kapil",
    age: 22,
    city: "Delhi"
};
const { name, city } = person;
console.log(`Name: ${name}, City: ${city}`);

// 4. Spread Operator
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log("Combined arrays:", newArr);

// Object spread
const basicInfo = { firstName: "Kapil", lastName: "Singh" };
const details = { age: 30, occupation: "Developer" };
const fullInfo = { ...basicInfo, ...details };
console.log("Full info:", fullInfo);

// 5. Arrow Functions
// Regular function
const multiply = function(x, y) {
    return x * y;
};

// Arrow function
const add = (x, y) => x + y;
console.log("Multiplication:", multiply(5, 3));
console.log("Addition:", add(5, 3));

// 6. Template Literals
const user = "kapil";
const role = "SDE";
const message = `
    Hello ${user}!
    Your role is: ${role}
    Current time: ${new Date().toLocaleTimeString()}
`;
console.log(message);
