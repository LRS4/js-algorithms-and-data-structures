function spinalCase(str) {
  let arr = str
  .split(/\s+|_|(?=[A-Z])/g)
  .map(item => item.toLowerCase())
  .join("-")

  return arr;
}

spinalCase('This Is Spinal Tap');
console.log(spinalCase('This Is Spinal Tap'));