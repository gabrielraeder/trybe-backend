import { ICar } from "./interfaces/interfaces";

export default class Car implements ICar {
  drive(): void { console.log('Drive a car'); }
}