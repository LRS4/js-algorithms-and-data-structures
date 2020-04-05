function uniteUnique(arr) {
  // Reduce and concat all arrays in one array
  let arrays = [...arguments].reduce((a, b) => a.concat(b));
  
  // Return array where duplicate indexes are removed in order
  return arrays.filter((value, index) => arrays.indexOf(value) === index);
}

let test = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(test); 
// Returns [ 1, 3, 2, 5, 4]