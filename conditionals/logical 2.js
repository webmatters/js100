if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// The expression provided as an argument to the if statement will always evaluate to false.
// Both expressions on either side of the && operator must be truthy in order for the entire condition to be evaluated as true
// The else block will always be executed, logging 'No...' to the console.
