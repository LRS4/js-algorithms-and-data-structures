function mutation(arr) {
  let word = arr[0].toLowerCase();
  let letters = [...arr[1].toLowerCase()];
  return letters.every((letter) => word.includes(letter))
}

mutation(["hello", "hey"]); // returns false
mutation(["Mary", "Army"]) // returns true
mutation(["Alien", "line"]) // returns true