// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  let slug = title
  .trim() 
  .split(/\s+/)
  .map(word => word.toLowerCase())
  .join("-")

  return slug;
}
// Only change code above this line

console.log(urlSlug(globalTitle));