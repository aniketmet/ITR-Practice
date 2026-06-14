// ######### Boolean & Comparison Operator .################

// booleans return true or false;

// let num1 = 2;
// let num2 = 4;

// console.log(num1 > num2); // false
// console.log(num1 < num2); // true
// console.log(num1 <= num2); // true
// console.log(num1 >= num2); // false


// ==  vs ===

let x = "8";
let y = 8;
// console.log(x == y);  // true
// console.log(x === y); // false
// In case of  == :
// It check only value not datatype .

// In case of === :
// It check for both datatype as well as value.


// != vs !==

let i = 5;
let j = "5";

console.log(i != j); // false
// In case of  != :
// It check only value not datatype .

console.log(i !== j); // true

// In case of !== :
// It check for both datatype as well as value.


// Imp Points :
// == and != perform type conversion before comparison.
// === and !== do not perform type conversion.
// In modern JavaScript, === and !== are generally preferred because they give more predictable results.
