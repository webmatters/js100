// first human year = 15 cat years
// second human year = 9 cat years
// each subsequent year = 4 cat years

function catAge(humanAge) {
  let catAge = 0;
  for (let age = humanAge; age > 0; age -= 1) {
    if (age > 2) {
      catAge += 4;
    } else if (age === 2) {
      catAge += 9;
    } else {
      catAge += 15;
    }
  }
  return catAge;
}

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));
