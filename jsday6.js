"use strict";

let obj = {
    name: "John",
 greet: function(){
   let obj2= {
        greet2: function(){
           console.log(this);
           let greet3 = function() {
            console.log(this);
           }
           return greet3;
        }
    }
    return obj2;
}}
let x= obj.greet().greet2();
x();

