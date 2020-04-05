function convertHTML(str) {
  let htmlEntities = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  }
  let regex = /[&<>"']/;
  return str.split("")
  .map(letter => {
    if (regex.test(letter)) {
      return htmlEntities[letter];
    } else {
      return letter;
    }
  })
  .join("");
}

let test = convertHTML("& Hamburger's < Pizza < Taco");
console.log(test);