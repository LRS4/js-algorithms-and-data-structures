let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log(result); // Returns 'three two one'

/**
 * This creates three capture groups
 * Then replaces the text with the capture groups in reverse order
 */
