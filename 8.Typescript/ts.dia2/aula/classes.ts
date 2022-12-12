class Dog {
  name: string;
  race: string;
  age?: number;

  constructor(name: string, race: string, age?: number) {
    this.name = name;
    this.race = race;
    this.age = age;
  }

  dogInfo(): string {
    if (this.age) {
      return `${this.name} tem ${this.age} anos e é um ${this.race}.`
    }
    return `${this.name} é um ${this.race}.`
  }
};

const dog1 = new Dog('Uber', 'Lhasa', 5);
const dog2 = new Dog('Max', 'lhasa');

console.log(dog1.dogInfo());
console.log(dog2.dogInfo());

class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;

  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  };

  flightPassengers(): string {
    return `Voo de origem ${this.origin} com destino ${this.destination} possui ${this.passengers} passageiros.`
  }
}