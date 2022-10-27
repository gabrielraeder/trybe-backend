const readline = require('readline-sync');

const fibonacci = (n) => {
  const arr = [0, 1];
  for (let i = 0; i < n; i+= 1) {
    arr.push(arr[arr.length-2] + arr[arr.length-1])
  }
  return arr;
}

function showSequence() {
  const number = readline.questionInt('Quantos números?  ');
  if (number === 0) {
    console.log('Enter a number greater than \'0\'!');
  }
  const array = fibonacci(number - 1);
  const noZero = array.filter((a) => a !== 0)
  console.log(noZero);
}

showSequence();