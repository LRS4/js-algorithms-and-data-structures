function destroyer(arr) {
  let args = [...arguments];
  let array = args.shift();
  return array.filter(item => !args.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// Returns [ 1, 1 ]
