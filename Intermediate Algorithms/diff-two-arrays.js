function diffArray(arr1, arr2) {
  var newArr = arr1
  .concat(arr2)
  .filter(item => !arr1.includes(item) || !arr2.includes(item))

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// Returns [ 4 ]

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
// Returns [ 'pink wool' ]