function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let answer = max; // initial answer

  for (let i = max - 1; i >= min; i--) {
    if (answer % i) {
      answer += max;
      i = max;
    }
  }
  return answer;
}


console.log(smallestCommons([1, 5])); // Returns 60
console.log(smallestCommons([2, 10])); // Returns 2520
console.log(smallestCommons([1, 13])); // Returns 360360
