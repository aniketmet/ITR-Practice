"use strict";
// Strict mode helps JavaScript detect common mistakes and prevents certain unsafe actions.
// It makes code more secure and easier to debug.
// console.log("hello World!!!");

// #############   Introduction to Variables. ##################

// Declare a Variable.
var name1;

// 1. Variables can store some information.
name1 = "Aniket";

// 2. We can use that information later.
console.log(name1);

// 3. We can Change that information as well.
name1 = "Darshan";
console.log(name1);

// JavaScript is Case Sensitive.
/*
 use strict mode to avoid the errors and case 
sensitive error issues.
*/

// ############### Rules for Naming variables #################

// # 1 . You cannot start with number.

// example :

// var 1value = 10;  // (invalid)
//  var value1 = 10 ; // (valid)
//  console.log(value1);
//  console.log(value1/2);  // division
//  console.log(value1*2);  // Multiply
//  console.log(value1+2);  // addition
//  console.log(value1-2);  // Subtract
//  console.log(value1 ** 2); // 10^2 --> 10 power 2 -> 100
//  console.log(value1 ** 0.5); // 10 root 2 --> 3.

// # 2 . You can use only underscore _ or dollar Symbol
//      from special Symbol only this are valid.

//  firstname_ = "abc";
//  _firstname = "abc";

//  firstname$ = "absd";
//  $firstname = "adaaw";

// # 3 . You can use Space in between variable declaration.

// first Name = "Yatin"; // Invalid

// Instead We can Do is that :

// var first_name = "Yatin"  // Snake Case Writing.
// var firstName = "Siddesh"; // Camel Case Writing.

// ########### JS Naming Convention for Variables ##########

// Naming Convention :
// - Normally in JS Start with small letter and use CamelCase.

// Naming Styles
/* Snake Case :-
   Words are separated using underscores.
   var first_name = "Yatin"; */
/* Camel Case
   The first word starts with a lowercase letter and each new word starts with a capital letter.
   var firstName = "Yatin";
   var studentName = "Aniket";
   var totalMarks = 500;
   Camel Case is the most commonly used naming convention in JavaScript. */