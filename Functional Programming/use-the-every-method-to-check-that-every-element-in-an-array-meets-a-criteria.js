function checkPositive(arr) {
  // Only change code below this line
  return arr.every(number => number > 0);

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5]));
// Returns false as array contains negative integers
