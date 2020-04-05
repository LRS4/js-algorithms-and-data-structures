function whatIsInAName(collection, source) {
  var arr = [...collection]
  // Only change code below this line
  let sourceKeys = Object.keys(source);

  // filter collection where every object has matching keys
  return arr.filter(object => {
    return sourceKeys.every(key => object.hasOwnProperty(key) && object[key] === source[key])
  });

  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

let test = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

console.log(test);
