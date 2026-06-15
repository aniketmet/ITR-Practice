// ternary operator / conditional operator


let age = 15;
let drink ;

if(age>=5){
    drink="coffee";
}else{
    drink="milk";

}

console.log(drink);

// Ternary operator

// Syntax
// condition ? value if true : value if false

// Meaning
// If the condition is true, the value before : is returned.
// If the condition is false, the value after : is returned.

let age1= 22;

let drinkit = age1 >= 20 ? "Coffee" : "Milk";

console.log(drinkit);

// The ternary operator is a shorthand form of if...else.
// ✅ Good for simple conditions:
// let status = age >= 18 ? "Adult" : "Minor";
// ❌ Not recommended for very complex conditions because readability decreases.
// let status = age >= 18 ? (age < 65 ? "Adult" : "Senior") : "Minor";   // Like this Hard to read