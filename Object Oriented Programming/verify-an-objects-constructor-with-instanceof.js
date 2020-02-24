/* jshint expr: true */

class House {
  constructor(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
}

// Add your code below this line
let myHouse = new House(2);

myHouse instanceof House; // returns true