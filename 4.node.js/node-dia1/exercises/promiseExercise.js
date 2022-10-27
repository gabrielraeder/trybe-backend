const threeNumbers = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números!'));
    }
    const value = (a + b) * c
    if (value < 50) {
      reject(new Error('Valor muito baixo!'));
    }
    resolve(value);
  })
  return promise;
}

// const calculo = async () => {
//   console.log(await threeNumbers(10, '10', 5));
// }

threeNumbers(1, 1, 5).then((result) => console.log(result)).catch((e) => console.log(e.message));
