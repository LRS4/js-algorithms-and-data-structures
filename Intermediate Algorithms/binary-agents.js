function binaryAgent(str) {
  let binaryArr = str.split(/\s+/g);
  let convertedToDecimal = [];

  binaryArr.forEach(number => {
    let decimal = String.fromCharCode(parseInt(number, 2));
    convertedToDecimal.push(decimal);
  });

  return convertedToDecimal.join("");
}

let test = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(test);
// Returns 'Aren't bonfires fun!?'

let testTwo = binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
console.log(testTwo);
// Returns 'I love FreeCodeCamp!'


