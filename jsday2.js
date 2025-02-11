// Create an object calculator, which will have methods read,add,subtract and multiply. The read method will use a prompt to ask two values from the user.

let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = parseFloat(prompt("first value:"));
        this.b = parseFloat(prompt("second value:"));
    },
    add() {
        return this.a + this.b;
    },
    subtract() {
        return this.a - this.b;
    },
    multiply() {
        return this.a * this.b;
    }
};


calculator.read();
console.log("Add: " + calculator.add());
console.log("Subtract: " + calculator.subtract());
console.log("Multiply: " + calculator.multiply());






// Create an object temperatureConverter with methods:
// read() → Ask the user to enter a temperature in Celsius.
// toFahrenheit() → Converts it to Fahrenheit.
// toKelvin() → Converts it to Kelvin.
// display() → Displays the results in the console.

let tempConverter = {
    cel: 0,
    read() {
        this.cel = parseFloat(prompt("Enter temperature in Celsius:"));
    },
    toFahrenheit() {
        return (this.cel * 9 / 5) + 32;
    },
    toKelvin() {
        return this.cel + 273.15;
    },
    display() {
        console.log("Temp in fahrenheit: " + this.toFahrenheit());
        console.log("Temp in kelvin: " + this.toKelvin());
    }
};


tempConverter.read();
tempConverter.display();




// Tasks:

// Q.1 Predict the output of the given snippet.
// Q.2 Explain how hoisting affects the execution  of console.log(z) in second().
// Q.3 Explain the scope chain for console.log(y) in  second().
// Q.4 What happens when console.log(y) is executed outside first() (Line 4)? Why?
// Q.5 Modify the code to use let instead of var and observe any differences.


var x = 5;
function first() {
    console.log(x); //Line 1
    var y = 10;

    function second() {
        console.log(y); //Line 2
        console.log(z); //Line 3
        var z = 20;
    }

    second();
}

first();
console.log(y); //Line 4



//ANS:1 Output ---------------------

// 5
// 10
// undefined
// Uncaught ReferenceError: y is not defined






//ANS:2 Explain how hoisting affects the execution  of console.log(z) in second().

// in the function's local execution context we have 2 phases -  
// Memory phase and execution phase
// In the memory phase, the variables inside second functions are declared and assigned undefined. the actual values are still in code only.
// In the execution phase, the values are assigned to the variables after line 3 before that line the value of the z will remain undefined so it prints Undefined.
// So this is called hoisting where we have the variables declared at the top of the function so we can use variables before its value assignment but its value is assigned in the execution phase.






//ANS:3  Explain the scope chain for console.log(y) in  second().

// though y is not declared in the second() function's scope then it will move to its parent scope which is first() function and will try to search the variable if it does not find it here also the it will move to the global scope and search for the variable. if it is not present in the global scope as well then it will throw an error.
// So the scope chain for y is second() -> first() -> global scope.  but it finds the variable in the first() function so it will use the value from there.






//ANS:4  What happens when console.log(y) is executed outside first() (Line 4)? Why?

// As y is declared with var keyword so its scope is limited to the function scope of the first() function now if we try to access the variable y outside the first() function then it will throw an error as y is not defined .






//ANS:5  Modify the code to use let instead of var and observe any differences.

let x = 5;
function first() {
    console.log(x); //Line 1
    let y = 10;

    function second() {
        console.log(y); //Line 2
        console.log(z); //Line 3
        let z = 20;
    }

    second();
}

first();
console.log(y); //Line 4


// Output
// 5
// 10
// Uncaught ReferenceError: Cannot access 'z' before initialization
// Uncaught ReferenceError: y is not defined                    (if we comment Line 3 line then we get this output for line 4)


// there will be no changes for Line 1, as x is declared with the let keyword and it is accessible in the global scope.

// for Line 2 the y is also present in the first() function's scope although it is initialized with let,so it will be accessible in the second() function as well.

// but in line three we will get an reference error as z is declared with let keyword it is also hoisted like the var keyword but it has one phenomena  called TDZ(Temporal Dead Zone) where the variable is declared but not initialized so if we try to access the variable before its initialization then it will throw an error. So hoisting exists in both cases but we can't access the variable before its initialization in the case of let keyword.

// if we comment the line 3 then
// the function will throw an error as y is not defined as y is declared with the let keyword so its scope is limited to the first() function only. so it will not be accessible outside the first() function. so it will throw an error.



