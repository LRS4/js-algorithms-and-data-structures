function pairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    str[i] == 'A' ? arr.push([str[i], 'T']) :
    str[i] == 'G' ? arr.push([str[i], 'C']) :
    str[i] == 'T' ? arr.push([str[i], 'A']) :
    str[i] == 'C' ? arr.push([str[i], 'G']) :
    console.error('Invalid character');
  }
  return arr;
}

pairElement("GCG");
console.log(pairElement("GCG"));
