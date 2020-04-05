class Person {
  constructor(fullName) {
    this.firstName = fullName.split(" ")[0];
    this.lastName = fullName.split(" ")[1];
  }
  // Complete the method below and implement the others similarly
  get getFullName() {
    return this.firstName + " " + this.lastName;
  }

  get getLastName() {
    return this.lastName;
  }

  get getFirstName() {
    return this.firstName;
  }

  set setFirstName(first) {
    this.firstName = first;
  }

  set setLastName(last) {
    this.lastName = last;
  }

  set setFullName(firstAndLast) {
    this.firstName = firstAndLast.split(" ")[0];
    this.lastName = firstAndLast.split(" ")[1];
  }
};

var bob = new Person('Bob Ross');

console.log(bob.getFullName); // Returns 'Bob Ross'
console.log(bob.getLastName); // Returns 'Ross'

bob.setFirstName = 'Haskell';
console.log(bob.getFirstName); // Returns Haskell

bob.setFullName = 'Napolean Bonaparte';
console.log(bob.getFullName); // Returns Napolean Bonaparte
