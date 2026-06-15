
// While Loop in JavaScript

// A while loop is used to execute a block of code repeatedly as long as a condition is true.

// Syntax
// while(condition)
// {
//      code to be executed
// }

// Working :-
// Check the condition.
// If the condition is true, execute the code inside the loop.
// Repeat until the condition becomes false.



// 0 se 9
/*
 // try this , don't repeat yourself
 let i = 0; // 1 2 3 4

while(i<=9) 
{  
    // console.log(i);
    console.log(`current value of i is ${i}`);
    i++;
}
console.log("hello");

*/


// while loop example

let total = 0; //1+2

let i=0;
while(i<=10){

 total= total + i;
 i++;
}
console.log(total);

// Output of Your Program
// 55
// because the loop adds all numbers from 0 to 10.


// -------------------------------------------------------------------

// while Loop
// while(condition){
//     // code
// }

// * Executes as long as the condition is true.
// * Condition is checked before every iteration.

// Important :-

// Always update the loop variable:
// i++;
// Otherwise, the loop may run forever (infinite loop).

// Example:

// let i = 0;

// while(i <= 5){
//     console.log(i);
// }

// This becomes an infinite loop because i never changes.
