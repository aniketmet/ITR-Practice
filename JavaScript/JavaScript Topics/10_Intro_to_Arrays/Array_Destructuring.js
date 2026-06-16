
// Arrays Destructuring

/* 

The destructuring assignment syntax is a JavaScript
expression that makes it possible to unpack values from 
arrays, or properties from objects, into distinct variables.

In Other words, Array Destructuring Is :
We Unpack whole array which is huge with data
And 
data can be values or properties
from
arrays or objects respectively

we assign it to distinct particular variables.

*/



//Basic Destructuring Array
const arrays = ["value1","value2"];

let a1 = arrays[0];
let a2 = arrays[1];

console.log(a1);
console.log(a2);



// // Other way of Destructuring Array in JS.

// const myarr1 = ["value1","value2"];

// let [b1,b2] = myarr1;

// console.log(b1);
// console.log(b2);




// // In case of let var destructuring
// const myarr2 = ["value1","value2"];

// let [c1,c2] = myarr2;

// c1 = "value3"; // We can change the value of c1.

// // Array is Destructed and stored in variables
// // and variable act similar to normal var
// console.log(c1);
// console.log(c2);




// // In case of Const var destructuring
// const myarr3 = ["value1","value2"];

// const[d1,d2]=myarr3;
// // d1 = "value5"; // We cannot change the value of d1 because it is declared as const.

// // Cannot change const var (d1) acts similar to normal const var, it cannot be reassigned.

// // Array is Destructed and stored in variables
// // and variable act similar to normal var
// console.log(d1);
// console.log(d2);



// Important Note : When an array is destructured, its values are assigned to separate variables.
// After assignment, those variables behave like normal variables (let, const, or var) and follow the same rules of reassignment and scope.


// ##################### Cases ########################


// // Case 1 -> Array Has More Values Than Variables

// const myarr = ["value1","value2","value3"];

// const [var1, var2] = myarr;

// console.log(var1);
// console.log(var2);

// // value3 → Ignored




// // Case 2 -> Variables More Than Array Values

// // only one value (Element) in array
// // But 3 variables are declared for destructuring the array.
// // 1 will be assigned rest undefined

// const myarr = ["value1"];

// const[var1,var2,var3]=myarr;

// console.log(var1);
// console.log(var2);
// console.log(var3);




// // Case 3 -> Skipping Values

// const myarr = ["value1","value2","value3","value4","value5"];

// // Skipping value 2 and value 4 for assigning
// const[var1,,var2,,var3]=myarr;

// console.log(var1);
// console.log(var2);
// console.log(var3);

// // Visual Representation :-

// // Index:    0       1       2       3       4
// // Array: [value1,value2,value3,value4,value5]
// //           ↓               ↓               ↓
// //         var1      ,     var2    ,      var3

// // value2 and value4 are skipped they considered comma and not assigned to any variable.
// // The empty commas tell JavaScript:
// // "Ignore this position."



// ############################################################



// // 1] Storing Remaining Values (Traditional Method)

// // If you want to store rest remaining values in array
// //  Below method is Basic 
// const myarr = ["value1","value2","value3","value4","value5"];

// const [var1, var2, var3] = myarr;

// const newarr = myarr.slice(3);

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(newarr);



// // 2] Storing Remaining Values Using Rest Operator (...)

// // Other way to store rest remaining values in array

// const myarr = ["value1","value2","value3","value4","value5"];
// // with help of spread operator
// const [var1, var2, var3, ...newarr] = myarr;

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(newarr);
