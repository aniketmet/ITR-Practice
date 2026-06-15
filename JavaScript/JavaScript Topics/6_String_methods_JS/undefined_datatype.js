
// ##############  Undefined ##################

/*
#
      A variable that has not been assigned a value is 
of type undefined . A method or statement also returns 
undefined if the variable that is being evaluated does 
not have an assigned value. 
A function returns undefined if a value was not returned .


 # What is undefined data type in JavaScript?

    A variable in JavaScript that is without any value has a
value of undefined. The datatype of a variable that holds 
an undefined value is also 'undefined'. 
*/


// in case of var

var firstName;
console.log(typeof firstName);

// What happens?
// var firstName;
// The variable is created but no value is assigned.
// JavaScript internally treats it as : var firstName = undefined;

// 

//-- Extra : Assigning a Value Later
firstName = "Yatin";
console.log( typeof firstName,firstName);


// in case of let

let first;
console.log(typeof first);

// Explanation :
// Just like var, let variables that are declared but not assigned a value become :
// let first = undefined;

// in case of const

// const first_Name; // (invalid)
// error -- > missing initializer in const declaration
// we need to initialize it in case of const.
console.log(typeof first_Name);  // We wrote this , But first_Name was never declared.
// In above case the o/p is given as undefined, but it is not the case of var or let. It is a special case of undeclared variable.
// Surprisingly, typeof does not throw an error for undeclared variables.



// Undefined vs Null
// Many beginners confuse these.

//                 Undefined	                                        Null
// 1. Value assigned automatically by JavaScript	    1. Value assigned manually by programmer
// 2. Means "value not assigned yet"	                2. Means "empty value"
// 3. Type = "undefined"	                            3. Type = "object" (JavaScript bug)