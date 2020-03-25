let haStr = "Hazzzzah";
let haRegex = /^Haz{4,}ah$/; // Change this line
let result = haRegex.test(haStr);
console.log(result); // Returns true where string contains 4 or more 'z' chars
