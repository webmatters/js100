function calculateBMI(heightInCm, weightInKg) {
  let bmi = weightInKg / (heightInCm / 100) ** 2;
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80));
