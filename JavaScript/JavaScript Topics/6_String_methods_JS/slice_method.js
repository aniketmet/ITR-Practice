// ############### Slice Method ####################

// The slice() method is used to extract a portion of a string without changing the original string.

// start index : Index at which to begin extraction. The character at this index will be included in the extracted string.

// end index : Index where extraction ends. The character at this index will not be included in the extracted string. 
// If end index is not provided, it will extract till the end of the string.

// Important: endIndex is exclusive. The character at endIndex is not included in the result.

let str = "theworldisgreat";

let newstr = str.slice(0,5);// thewo
// 0 1 2 3 4 index values will be returned
// will iterate from 0 to <5 and slice from str to newstr
console.log(newstr); // thewo

let newstr2 = str.slice(4); 
console.log(newstr2); // orldisgreat
// here from 4th index to end of string will be returned and sliced
// will iterate from 4th to last index

let newstr3 = str.slice(-5);
console.log(newstr3);
// This behavior is the same for arrays as well: slice() creates a new portion while leaving the original data unchanged.
