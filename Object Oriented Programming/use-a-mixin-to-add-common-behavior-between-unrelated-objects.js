let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
let glideMixin = (obj) => {
  obj.glide = function() {
    console.log("Gliding, wooosh!");
  }
} 

// Use the mixin to give both bird and boat the ability to glide
glideMixin(bird);
glideMixin(boat);

console.log(bird.glide()) // returns "Gliding, wooosh!"