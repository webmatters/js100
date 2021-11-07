let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// Predicted output: false
// When each array is initialized, each variable references a different object at a different location in memory. The fact that each object happens to have the same keys and values is irrelevant.
