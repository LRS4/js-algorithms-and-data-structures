function nonMutatingConcat(original, attach) {
  // Only change code below this line
  let newArray = original.concat(attach);
  return newArray;
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
