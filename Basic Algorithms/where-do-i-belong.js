function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // sort array
  arr.sort(function(a, b){return a - b});

  // check array position
  var i = 0;
  while (num > arr[i]) {
    i++;
  }

  return i;
}

getIndexToIns([60, 40], 50); // returns 1
getIndexToIns([10, 20, 30, 40, 50], 30) // returns 2