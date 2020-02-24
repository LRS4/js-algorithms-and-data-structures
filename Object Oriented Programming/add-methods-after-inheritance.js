class Animal {
    eat() { console.log("nom nom nom") }
};

class Dog extends Animal { 
    bark() { console.log("Woof!") }
};

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
