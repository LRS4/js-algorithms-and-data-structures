function findLongestWordLength(str) {
  let arr = str.split(' ');
  let maxLength = 0;
  arr.forEach(word =>
    (word.length > maxLength) ? maxLength = word.length : maxLength = maxLength
  )
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
