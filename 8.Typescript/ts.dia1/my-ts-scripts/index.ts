import readline from "readline-sync";
import barrel from './barrel';

const choices = ['area', 'capacity', 'length', 'mass', 'volume']

function exec() {
  const convertion = readline.keyInSelect(choices, "Escolha um número para o tipo de conversão: \n");
  const convert = barrel(choices[convertion]);
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  const fromUnitChoiceIndex = readline.keyInSelect(convert.units, "Escolha um número para a unidade base:");

  const toUnitChoiceIndex = readline.keyInSelect(convert.units, "Escolha um número para a conversão:");

  const toUnitChoice = convert.units[toUnitChoiceIndex];
  const fromUnitChoice = convert.units[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  
  const result = convert.convert(value, fromUnitChoice, toUnitChoice);

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();