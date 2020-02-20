function reverseString(str) {
  for (var newStr = "", i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

reverseString("hello");
