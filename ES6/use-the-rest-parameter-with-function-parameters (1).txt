// ES6 Use the Rest Parameter with Function Parameters

const sum = (...args) => {
  return args.reduce(function(sum, value) {
    var sum = sum + value;
    return sum;
  }, 0);
}

// Or

const add = (...args) => {
  return args.reduce((sum, value) => sum + value)
}

// Output
console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 5, 5, 5)) // 20
console.log(add(1, 2, 3)) // 6
console.log(add(5, 5, 5, 5)) // 20
