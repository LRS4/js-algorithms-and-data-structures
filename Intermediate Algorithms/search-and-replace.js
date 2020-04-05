function myReplace(str, before, after) {
  // check if first letter of before word is capital
  let caseCheck = before[0] === before[0].toUpperCase();
  if (caseCheck) {
    let afterCaps = after[0].toUpperCase() + after.slice(1, );
    return str.replace(before, afterCaps); 
  } else {
    return str.replace(before, after);
  }
}

let test = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

console.log(test); // Returns 'He is Sitting on the couch'

