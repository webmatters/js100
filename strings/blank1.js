function isBlank(string) {
  return !string;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  ')); // false
console.log(isBlank('')); // true
