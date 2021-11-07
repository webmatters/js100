let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// The sale variable is initialized with the value true.
// The conditional expression in the ternary statement on line 2 negates or flips the value of the boolean value true previously assigned to the sale variable, reassigning the sale variable to false.
// Because the conditional expression is falsy, the value after the colon (:), 3.99 is assigned to the admissionPrice variable.
// '$3.99' will be logged to the console.
