let rickyAndCal = "Cal and Ricky both like racing.";
let calAndRicky = "Ricky and Cal both like racing";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
let resultTwo = calRegex.test(calAndRicky);

console.log(result); // Returns true
console.log(resultTwo); // Returns false
/**
 * This is because Cal is at the beginning of the string.
 */
