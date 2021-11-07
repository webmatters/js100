let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

const index = energy.indexOf('fossil');

if (index > -1) {
  energy.splice(index, 1);
}

energy.push('geothermal');

console.log(energy);
