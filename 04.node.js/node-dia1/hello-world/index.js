const readline = require('readline-sync');

const nome = readline.question('Qual o seu nome? ')
const idade = readline.questionInt('Qual sua idade? ')
console.log(`Hello, ${nome}! You are ${idade} years old!`);