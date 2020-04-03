function alphabeticalOrder(arr) {
  // Only change code below this line
  let newArray = arr.sort((a, b) => a.localeCompare(b));
  return newArray;
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))