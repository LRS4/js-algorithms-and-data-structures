function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  
  // copy array
  let arr = [...arr2];

  // start at index n, modify none, and insert arr1
  arr.splice(n, 0, ...arr1);

  return arr;  
} 

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3], [4, 5], 1);