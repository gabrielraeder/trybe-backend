import SubClass from "./class/subclass";
import SuperClass from "./class/superclass";
import MyClass from "./class/myClass";
import ConsoleLogger, { ConsoleLogger2 } from "./class/ConsoleLogger";
import ExampleDatabase from "./class/ExampleDatabase";

// const myFunc = (obj: SuperClass) => {
//   obj.sayHello();
//   console.log(obj.isSuper ? 'Super!' : 'Sub!');
// }

// const superObj = new SuperClass();
// const subObj = new SubClass();

// myFunc(superObj);
// myFunc(subObj);

// const myClass = new MyClass(5);

// console.log(myClass.myFunc(5));

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('chave1', 'valor1');
db2.save('chave2', 'valor2');
db3.save('chave3', 'valor3');