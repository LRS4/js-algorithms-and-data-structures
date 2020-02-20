function countOnline(usersObj) {
  // change code below this line
  let countOnline = 0;
  for (let user in usersObj) {
    (usersObj[user].online == true) ? countOnline += 1 : countOnline += 0;
  }
  return countOnline;
  // change code above this line
}
