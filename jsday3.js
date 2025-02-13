// Create a hierarchy of person, employee and developers. 

// Created using Object.create() method which uses prototype chaining. 
// (i have used the person name in prior question so i have used people here)
let people = {
    name: "Kapil",
    age: 22,
    city: "Delhi"
}

let employee=Object.create(people);
employee.company = "TTN";

let developer=Object.create(employee);
developer.skills = "JS";

console.log(developer.skills);
console.log(developer.company);
console.log(developer.name);
//From above lines we can see that developer object has access to all the properties of employee and people object.



// ----------------------------------------------------------------------------------------------------------------------------------


// Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.

let say = [1,2,3,4,5];
for (let i=0; i<say.length; i++) {
   setTimeout(() => console.log(say[i]), 3000 + (i)*3000);
}
// OR
// let say2 = [1, 2, 3, 4, 5];
// let index = 0;
// let intervalId = setInterval(() => {
//     console.log(say2[index]);
//     index++;
//     if (index === say2.length) {
//         clearInterval(intervalId);
//     }
// }, 3000);







// ----------------------------------------------------------------------------------------------------------------------------------


// Explain difference between Bind and Call (example).

// Both bind and call are used for borrowing a function for an object , the fuction could be inside any object or it also can be a normal function outside any object.
// Bind returns a new function copy, allowing you to execute whenever you want. Call executes the function immediately.
function person(hometown, state) {
    console.log(this.name + " is " + this.age + " years old and lives in " + hometown + ", " + state);
}

let obj1 = {
    name: "sachin",
    age: 23,
}

let obj2 = {
    name: "kapil",
    age: 22,
}

person.call(obj1, "mumbai", "maharashtra");
let bindMethod = person.bind(obj2, "chandigarh", "punjab");
bindMethod();







// ----------------------------------------------------------------------------------------------------------------------------------


// Explain 3 properties of argument object.

// it is used when we have too may arguments in a function and we want to pass all the arguments in a single object.
// we can access the length of arguments using arguments.length
// arguments are not available inside arrow functions.
// we can update the passed arguments using argumenti[index].







// ----------------------------------------------------------------------------------------------------------------------------------


// Array methods examples

// 1.push()
// Adds one or more elements to the end of an array and returns the new length of the array.
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); 

// 2.pop()
// Removes the last element from an array and returns that element.
let lastFruit = fruits.pop();
console.log(lastFruit); 
console.log(fruits); 

// 3.map()
// Creates a new array with the results of calling a provided function on every element in the calling array.
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); 

// 4.filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// 5.reduce()
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 







// ----------------------------------------------------------------------------------------------------------------------------------


// Counter using closures
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log("count :",counter.getCount() ); 
counter.increment();
console.log("count :",counter.getCount() ); 
counter.increment()
console.log("count :",counter.getCount() ); 
counter.decrement()
console.log("count :",counter.getCount() ); 






// ----------------------------------------------------------------------------------------------------------------------------------


// Create a function which returns number of invocations and number of instances of a function.
function createFunctionTracker() {
    let invocationCount = 0;
    let instanceCount = 0;

    invocationCount++;
    return {
        createInstance: function() {
            instanceCount++;
            invocationCount++;
        },
        getInvocationCount: function() {
            return invocationCount;
        },
        getInstanceCount: function() {
            return instanceCount;
        }
    };
}


let tracker = createFunctionTracker();
console.log("InvocationCount :",tracker.getInvocationCount()," InstanceCount :", tracker.getInstanceCount()); 
tracker.createInstance();
console.log("InvocationCount :",tracker.getInvocationCount()," InstanceCount :", tracker.getInstanceCount()); 
tracker.createInstance();
console.log("InvocationCount :",tracker.getInvocationCount()," InstanceCount :", tracker.getInstanceCount()); 

