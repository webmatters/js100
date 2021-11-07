const string = 'launch school tech & talk';

const stringArray = string.split(' ');

let capitalizedString = '';

stringArray.forEach((word, index) => {
  if (index === 0) {
    capitalizedString += `${word[0].toUpperCase()}${word.slice(1)}`;
  } else {
    capitalizedString += ` ${word[0].toUpperCase()}${word.slice(1)}`;
  }
});

console.log(capitalizedString);
