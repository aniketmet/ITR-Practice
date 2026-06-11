"use strict"
// var came First .
// then let was introduced as var had some limitations.

// ################ Var keyword ##################

// #1. declare variable with var keyword.

var firstName = "Jay";
// Can store information and declare variable.

firstName ="Harsh";
// Can change existing value.

var firstName ="Kunal"; 
// can be declared with same variable and overwrite value.

console.log(firstName);

// ################ let keyword ##################

// #1 . declare variable with let keyword.

let first_Name = "Shubh"; 
// Can store information and declare variable.

first_Name = "Virat"; 
// Can change existing value.

//  let first_Name ="Siddhi"; 
// (Already has been Declared error)
// Cannot redeclare same variable.
console.log(first_Name);

// ################ const keyword ##################

// #3 . declare constants
// whose values cannot be changed.

const PI = 3.14;
console.log(PI);
// Can store information and declare constant.


// const pi1 = 3.14;
// pi1 = 3.15; 
// cannot change the value of constant variable .
console.log(PI); // It always constant anywhere in the program.


// block scope vs Function Scope 

// Summary :

// Difference Between var, let, and const
// var is function-scoped, while let and const are block-scoped.
// Variables declared with var can be redeclared and reassigned.
// Variables declared with let cannot be redeclared in the same scope, but they can be reassigned.
// Variables declared with const can neither be redeclared nor reassigned after initialization.
// All three (var, let, and const) are hoisted, but only var can be accessed before declaration with the value undefined.
// Accessing a let or const variable before declaration results in a ReferenceError.

// Easy Rule to Remember
// var → Function Scoped
// let → Block Scoped
// const → Block Scoped

// Modern JavaScript Recommendation
// Use const by default whenever the value should not change.
// Use let when the value needs to be updated later.
// Avoid using var in modern JavaScript because it can lead to scope-related bugs and unexpected behavior..

// Variables declared inside a function (var, let, or const) are local to that function.
// They can be used only within the function body and cannot be accessed from outside,
// which helps prevent accidental modification of data and keeps code organized.