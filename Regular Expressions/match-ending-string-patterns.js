let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result) // Returns true
/**
 * This is because caboose is at the end of the string
 */
