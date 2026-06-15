

// Continue Keyword

// The continue statement skips the current iteration and moves to the next iteration.

// Example

// for(let j = 0; j <= 9; j++)
// {
//     if(j == 5)
//     {
//         continue;
//     }
//     console.log(j);
// }

// Step-by-Step :
// j = 0 → print 0
// j = 1 → print 1
// j = 2 → print 2
// j = 3 → print 3
// j = 4 → print 4
// j = 5

// Condition:
// j == 5
// True
// Execute:-
// continue;
// JavaScript skips:
// console.log(j);
// and goes directly to the next iteration.
// So 5 is not printed.
// j = 6, 7, 8, 9
// These values are printed normally.

// Output
// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9


// Note: The continue statement only skips the current iteration, it does not terminate the loop like break.

// Difference Between break and continue :

// |            break                   |              continue                 |
// | ---------------------------------- | --------------------------------------|
// | 1. Stops the entire loop           | 1. Skips only the current iteration   |
// | 2. Loop ends immediately           | 2. Loop continues with next iteration |
// | 3. Remaining iterations do not run | 3. Remaining iterations still run     |
