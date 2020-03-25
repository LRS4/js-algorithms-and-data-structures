let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z][0-9]*?>/; // Change this line
let result = text.match(myRegex);

/*
* Outputs
[ '<h1>',
  index: 0,
  input: '<h1>Winter is coming</h1>',
  groups: undefined ]
*/
