class Bird {
  constructor() {
    let weight = 15
    this.getWeight = function() { return weight; };
  }
}

let dove = new Bird;
console.log(dove.getWeight()); // outputs 15
