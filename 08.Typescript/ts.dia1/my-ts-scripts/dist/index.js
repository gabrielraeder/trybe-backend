"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
// import * as area from './area';
// import * as capacity from './capacity';
// import * as length from './length';
// import * as mass from './mass';
// import * as volume from './volume';
const barrel_1 = __importDefault(require("./barrel"));
const choices = ['area', 'capacity', 'length', 'mass', 'volume'];
function exec() {
    const convertion = readline_sync_1.default.keyInSelect(choices, "Escolha um número para o tipo de conversão: \n");
    const convert = (0, barrel_1.default)(choices[convertion]);
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(convert.units, "Escolha um número para a unidade base:");
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(convert.units, "Escolha um número para a conversão:");
    const toUnitChoice = convert.units[toUnitChoiceIndex];
    const fromUnitChoice = convert.units[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = convert.convert(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
