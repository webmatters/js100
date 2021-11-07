function repeat(n, string) {
  let repeatedString = '';

  for (count = 1; count <= n; count += 1) {
    repeatedString += string;
  }

  return repeatedString;
}

console.log(repeat(3, 'ha'));
