function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/

  if (!str.match(consonantRegex)) {
    return `${str}way`;
  } else {
    const consonantCluster = str.match(consonantRegex)[0];
    return str.substring(consonantCluster.length) + consonantCluster + 'ay';
  }
}

console.log(translatePigLatin("consonant")); // Returns 'onsonantcay'
console.log(translatePigLatin("eight")); // Returns 'eightway'
