function localGreet(locale) {
  const language = extractLanguage(locale);
  const region = extractRegion(locale);

  switch (region) {
    case 'US':
      return 'Hey!';
    case 'GB':
      return 'Hello!';
    case 'AU':
      return 'Howdy!';
    default:
      return greet(language);
  }
}

function extractLanguage(locale) {
  return locale.substring(0, 2);
}

function extractRegion(locale) {
  return locale.slice(3, 5);
}

function greet(language) {
  switch (language) {
    case 'en':
      return 'Hi!';

    case 'fr':
      return 'Salut!';

    case 'pt':
      return 'Ola!';

    case 'de':
      return 'Hallo!';

    case 'sv':
      return 'Hej!';

    case 'af':
      return 'Haai!';
  }
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_UK.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));
console.log(localGreet('fr_FR.UTF-8'));
