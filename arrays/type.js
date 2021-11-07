let arr = [1, 2, 3];
let string = 'foobar';

function filter(input) {
  return Array.isArray(input);
}

console.log(filter(arr)); // true
console.log(filter(string)); // false
