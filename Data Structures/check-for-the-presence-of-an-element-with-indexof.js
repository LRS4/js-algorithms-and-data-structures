function quickCheck(arr, elem) {
  // change code below this line
  if (arr.indexOf(elem) == -1) {
    return false;
  } else {
    return true;
  };
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
