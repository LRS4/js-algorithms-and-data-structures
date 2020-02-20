function findElement(arr, func) {

  // apply function to each item in array
  let truthArray = arr.map(func) // returns [false, true, false, true]
  let index = truthArray.indexOf(true); // returns 1
  
  // use that index to display first number that meets condition 
  return arr[index];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
