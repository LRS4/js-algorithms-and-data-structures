class Animal {
  eat() {
    return console.log("nom nom nom");
  }
}

// Add your code below this line
class Dog extends Animal { }

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
