// ################## Intro to Arrays ####################

// Key Points About Arrays
// Arrays store multiple values in a single variable.
// Each value is called an element.
// Every element has an index number.
// Indexing starts from 0.
// Arrays are Reference Types.
// Arrays are Mutable, meaning their contents can be changed after creation.

//---------------------------------------------------------------

// How to create Arrays.
//---------------------------------------------------------------

// // Numbers Array
// let arr = [10,20,30,40,50];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
//---------------------------------------------------------------

// // String Array
// let names = ["Aniket","Jay","Darshan","Swapnil"];

// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

//---------------------------------------------------------------
// // In array you can store multiple datatype at once.

// let mixed = [100,200,3.14,"Cherry",null,undefined];
// console.log(mixed);

//---------------------------------------------------------------

// Arrays are mutable we can change certain data
// with the help of array indexing

let fruits = ["apple","mango","grapes"];
console.log(fruits);   // Prints the current elements in an array.

fruits[1] = "banana"; // Changes the element at index 1 from "mango" to "banana".
console.log(fruits);    // Prints the updated elements in the array after modification.

// Output of Your Program
// ["apple", "mango", "grapes"]
// ["apple", "banana", "grapes"]