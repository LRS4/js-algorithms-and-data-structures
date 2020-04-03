function sentensify(str) {
  // Only change code below this line
  // Split on any non-word char
  let arr = str.split(/\W/g);
  
  return arr.join(" ")
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
console.log(sentensify("May-the-force-be-with-you"));
// Returns 'May the force be with you'
