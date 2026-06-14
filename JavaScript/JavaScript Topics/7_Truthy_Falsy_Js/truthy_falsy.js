// ################## Truthy and falsy values ######################


// #1. falsy values : Falsy values are values that JavaScript automatically treats as false in a condition.

// false
// ""
// null
// undefined
// 0
// NaN

// Example of falsy values

/* 
if(false)
{
    console.log("Hello");
}
else
{
    console.log("Falsy Value");
} 

// Output 
// Falsy Value
*/

// 2# .truthy values : All values other than falsy values are considered truthy.

// all are truthy
// "abc"
// "hello"
// 1
// -1
// 100
// []
// {}
// true


// try all falsy values and truthy to see output

let firstname;
if(firstname)
{
    console.log(firstname);
}
else
{
    console.log("empty variable");
}

// Empty String Example :

let name = "";

if(name){
    console.log("Name exists");
}
else{
    console.log("Name is empty");
}

// O/p : Name is empty. Because "" is falsy.

// Imp 
// In an if condition, 
// JavaScript automatically converts the value to either true or false.

// Most Common Usage
let username = "Aniket";

if(username){
    console.log("User exists");
}
else{
    console.log("User not found");
}