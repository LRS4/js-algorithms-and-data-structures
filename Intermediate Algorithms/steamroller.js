function steamrollArray(arr) {
  let newArray = [].concat(...arr);
  return newArray.some(item => Array.isArray(item)) ? steamrollArray(newArray) : newArray;
}

let firstTest = steamrollArray([1, [2], [3, [[4]]]]);
console.log(firstTest);
// Returns [1, 2, 3, 4]

let secondTest = steamrollArray([1, {}, [3, [[4]]]])
console.log(secondTest);
// Returns [1, {}, 3, 4]