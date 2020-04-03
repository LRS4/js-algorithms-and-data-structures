function checkPositive(arr) {
  // Only change code below this line
  let checkArr = arr.some(value => value > 0);
  
  return checkArr;
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5]));