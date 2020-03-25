let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

/*
 * ^\D = Starts with a non-digit character
 * (?=\w{5}) = Lookahead to check for five chars long
 * (?=\w*\d{2}) = Lookahead for any length of chars plus two consecutive digits 
 */

