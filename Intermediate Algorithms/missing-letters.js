function fearNotLetter(str) {
  // Get char code of first letter
  let compare = str.charCodeAt(0);
  let missing;  

  /*
  As we map through our letters’ character codes, 
  we go comparing with the one that should be in that position. 
  */
  str.split("").map((letter, index) => {
    if (str.charCodeAt(index) == compare) {
      compare++;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

fearNotLetter("abce");
console.log(fearNotLetter("abce"));