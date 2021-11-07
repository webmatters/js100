let destinations = [
  'Prague',
  'London',
  'Sydney',
  'Belfast',
  'Rome',
  'Aruba',
  'Paris',
  'Bora Bora',
  'Barcelona',
  'Rio de Janeiro',
  'Marrakesh',
  'New York City',
];

function contains(city, destinations) {
  for (const destination of destinations) {
    if (destination === city) {
      return true;
    }
  }
  return false;
}

console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));
