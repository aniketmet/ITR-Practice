// ####################### typeof operator ###############
/*
What is typeof in JavaScript?
Typeof in JavaScript is an operator used for type checking 
and returns the data type of the operand passed to it.
*/ 

// Data types

// # Primitive Data Types

// string "abcd"
// number 2,3,4,5.6
// booleans
// undefined
// null
// BigInt
// Symbol


let age = 22;
let name = "abcdef";

console.log(typeof age); // number
console.log(typeof name); // string


// ######### Convert number to string ###################


// console.log(typeof age); // number
// // after Converting number to string
// console.log(typeof(age + "")); // string

age = age + "";
console.log(typeof age); // string

// Explanation :
// 22 + "" => "22" (string) which is a string.

// ------------------------------------------------------------
// Other way :

let num1 = 18;
num1 = String(num1);
console.log(typeof num1);

// Explanation :
// which is a string.
// String(18) =>  becomes: "18" (string) which is a string.

// ############### Convert String to number ##############

let num2 = +"100";

console.log(num2);
console.log(typeof num2); // number

// Explanation :
// The + before the string converts it to a number.
// +"3" => 3 (number) which is a number.

// ------------------------------------------------------------
// Other way : Using Number() function

let age1 = "18";
age1 = Number(age1);
console.log(typeof age1); // number

// Explanation :
// The Number() function converts a string to a number.
// Number("18") => 18 (number) which is a number.
