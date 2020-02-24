class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat() {
    console.log("nom nom nom");
  },
  describe() {
    console.log("My name is " + this.name);
  }
};
