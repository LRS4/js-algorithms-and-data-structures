let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs() { return `This dog has ${dog.numLegs} legs.` }
};

dog.sayLegs(); // returns 'this dog has 4 legs'