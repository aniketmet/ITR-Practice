// template String

let name = "Aniket";
let age = 17;

// "my name is Yatin and my age is 22 "

let about_me = "my name is " + name + " and my age is " + age;
console.log(about_me);

// ---------------------------------------------------
// other method
// template strings 

let about = `my name is ${name} and my age is ${age}`;
console.log(about);

/*
In JavaScript, the template string implements the string 
interpolation. A template string is defined by wrapping 
a sequence of characters into a pair of backticks 
`I'm template string` . 
The template string placeholders have the format ${expression} , 
for example `The number is ${number}` .
A Template String is a modern way to create strings in JavaScript.
Instead of joining variables using the + operator, we can directly insert variables inside a string using ${} and backticks ( ).
*/
