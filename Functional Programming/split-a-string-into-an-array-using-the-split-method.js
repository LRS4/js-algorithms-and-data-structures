function splitify(str) {
  // Only change code below this line
  // Use regex to split by any non-word char
  let arr = str.split(/\W/g);
  return arr;
  // Only change code above this line
}
splitify("Hello World,I-am code");
console.log(splitify("Hello World,I-am code"));
// Returns [ 'Hello', 'World', 'I', 'am', 'code' ]