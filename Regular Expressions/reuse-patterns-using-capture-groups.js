let repeatNum = "42 42 42";
let repeatNumTwo = "100 100 100 100";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
let resultTwo = reRegex.test(repeatNumTwo);

console.log(result); // Returns true
console.log(resultTwo); // Returns false

/**
 * ^(\d+) = Starts with a capture group of digits
 * \s = then a space
 * \1 = then capture group 1 (the only one defined) again
 * \s = then a space
 * \1$ = then ends in capture group 1 again
 * 
 * All in all capture group one repeats three times in the string
 */