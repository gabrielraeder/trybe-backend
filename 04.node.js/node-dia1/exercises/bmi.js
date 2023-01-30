const readline = require('readline-sync');

const handleBMI = (weigh, height) => weigh / Math.pow((height/100), 2)

const categoryOfBMI = (bmi) => {
  if (bmi < 18.5) return 'Abaixo do peso';
  if (bmi >= 18.5 && bmi < 25) return 'Peso Normal';
  if (bmi >= 25 && bmi < 29.9) return 'Acima do peso';
  if (bmi >= 29.9 && bmi < 34.9) return 'Obesidade grau I';
  if (bmi >= 34.9 && bmi < 39.9) return 'Obesidade grau II';
  return 'Obesidade grau III e IV';
}

function main() {
  const weightInKg = readline.questionFloat('What\'s your weight?  ');
  const heightInCm = readline.questionInt('What\'s your height?  ');
  const bmi = handleBMI(weightInKg, heightInCm);
  const category = categoryOfBMI(bmi);

  console.log(`
BMI: ${bmi.toFixed(2)}
Status: ${category}`);
}

main();