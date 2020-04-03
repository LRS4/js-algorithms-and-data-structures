const squareList = (arr) => {
  // Only change code below this line
  let newArray = arr
  .filter(number => Number.isInteger(number) && number > 0)
  .map(number => Math.pow(number, 2));

  return newArray;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
