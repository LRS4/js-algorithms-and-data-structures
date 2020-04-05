function addTogether() {
  let args = Array.from(arguments);
  return args.some(n => typeof n !== "number") 
    // if some of array are not numbers returned undefined
    ? undefined
    : args.length > 1
    // else if more than one args reduce and sum
    ? args.reduce((sum, number) => (sum += number), 0)
    // else return a function that takes a number
    : number => (typeof number === "number" ? number + args[0] : undefined)
}

addTogether(2,3); // Returns 5
console.log(addTogether(2)(3)); // Returns 5
console.log(addTogether(2)([3])); // Returns undefined