/**
 * So far, we have seen two distinct principles for functional programming:

1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
 */

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {

  let newBookList = [...bookList];
  newBookList.push(bookName);
  return newBookList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {
  let newBookList = [...bookList];
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newBookList);
