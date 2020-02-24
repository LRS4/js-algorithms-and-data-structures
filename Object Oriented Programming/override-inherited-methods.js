/*
It's possible to override an inherited method. It's done the same way - by adding a method to the child class using the same method name.
*/

class Bird {
    fly() { return "I am flying!"; };
}

class Penguin extends Bird {
    fly() { return "Alas, this is a flightless bird." }
}

let penguin = new Penguin();
console.log(penguin.fly());
