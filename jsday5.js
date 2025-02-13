// function in global scope
function greet() {    
    console.log(this);       
}
greet();   //global object

// function inside function
function  greet2() {
           let greet3 = function() {
            console.log(this);
           }
         greet3();
}
greet2();

// function inside object
let obj = {
    name: "kapil",
    greet: function() {
        console.log(this);
       } 
}
obj.greet(); //object   


// obj -> function -> function -> this
const obj1 = {
    name: "kapil2",
    greet: function () {
            function greet2() {
                console.log(this);
            }
         greet2();
    }
};

obj1.greet();


// obj -> function -> obj -> function -> this
const obj2 = {
    name: "kapil2",
    greet: function () {
        const obj2= {
             name :"karan",
            greet2: function () {
                console.log(this);
            }
        }
        return obj2;
    }
};

obj2.greet().greet2();
