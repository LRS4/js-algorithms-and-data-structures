function titleCase(str) {
  let arr = str.toLowerCase().split(' ');
  str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i].charAt(0).toUpperCase() + arr[i].slice(1); // add to string
    (i == arr.length - 1) ? str += '' : str += ' '; // add a space
  }
  return str;
}

titleCase("I'm a little tea pot"); // returns I'm A Little Tea Pot 
titleCase("sHoRt AnD sToUt"); // returns Short And Stout 
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") 