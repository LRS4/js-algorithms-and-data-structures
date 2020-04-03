var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = [].concat(arr);
  newArray.sort((a, b) => a - b);
  return newArray;
  // Only change code above this line
}
nonMutatingSort(globalArray);
console.log(nonMutatingSort(globalArray));