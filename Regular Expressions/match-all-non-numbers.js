let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result); // Outputs 17 for count of non-digits in movieName
