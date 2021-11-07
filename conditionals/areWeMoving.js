let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// true
// The parentheses are required. Without them, JS interprets the entire && expression together and compares it to the expression on the other side of the ||.
