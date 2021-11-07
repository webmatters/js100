let groceryList = [
  'paprika',
  'tofu',
  'garlic',
  'quinoa',
  'carrots',
  'broccoli',
  'hummus',
];

let iterations = groceryList.length;
let count = 0;
while (count < iterations) {
  console.log(groceryList.shift());
  count += 1;
}

console.log(groceryList);
