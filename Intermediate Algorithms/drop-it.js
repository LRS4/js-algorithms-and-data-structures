const dropElements = (arr, func) => {
  // Iterate over array and slice at index where true
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(arr.indexOf(arr[i]));
    }
  }
  // Else return empty array
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
// Returns [1, 2]

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // Returns [1, 0, 1]

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); // Returns [3, 9, 2]

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
// Returns []