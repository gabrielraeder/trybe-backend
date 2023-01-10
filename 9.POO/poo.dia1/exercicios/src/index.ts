import Student  from "./student";
import Client from './cliente';
import Order from './order';
import Item from './item';
import Data from './data';

const student1 = new Student('Gabriel', '1', [10, 1, 10, 10], [10, 10]);
console.log(student1.scoresSum());
console.log(student1.average());

const client = new Client('João');

const sandwich = new Item('Sanduíche Natural', 5.00);
const juice = new Item('Suco de Abacaxi', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order.total());
console.log(order.totalWithDiscount());

const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
const invalidDate = new Data(31, 2, 2021);

console.log('Teste data inválida: ', invalidDate);

// formato inválido
console.log(invalidDate.format('a m d'));