function repeatStringNumTimes(str, num) {
  // repeat after me
  let newStr = "";
  if (num <= 0) {
    return "";
  } else {
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3); // returns "abcabcabc"
