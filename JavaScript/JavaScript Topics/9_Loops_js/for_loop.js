
// intro to For loop

// A loop is used to execute a block of code repeatedly until a condition becomes false.

// For Loop Syntax :
// for(initialization; condition; Expression(increment/decrement))
// {
//     // code to be executed
// }


for(let i=0;i<=9;i++)
{
    console.log(i);
}

// // For loop example

let total = 0; //1+2
let num = 100;
let i=0;
for(i=0;i<=num;i++)
{
    total= total + i;
}
console.log(total);


// break and continue keywords

// 1] break statement is used to exit the loop immediately when a certain condition is met.

// break;
// Terminates the loop completely.
// Control comes out of the loop.


for(let j=0;j<=9;j++){
    if(j==5){
        break; // breaks loop at 5th
    }
    console.log(j);
}

// Output of Your Code
// break = Stop the loop
// 0
// 1
// 2
// 3
// 4



// 2] continue statement is used to skip the current iteration and move to the next iteration of the loop when a certain condition is met.

// continue;
// Skips the current iteration.
// Control goes to the next iteration of the loop.

for(let j=0;j<=9;j++){
    if(j==5){
        continue; // takes back to loop skips 5th 
    }
    console.log(j);
}

// Output of Your Code
// continue = Skip the current iteration or Skip and continue.
// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9