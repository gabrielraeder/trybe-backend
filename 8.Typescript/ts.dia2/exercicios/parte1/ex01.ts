class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk = (): void => console.log('Buzinando');
  turnOn = (): void => console.log('Ligando o motor');
  turnOff = (): void => console.log('Desligando o motor');
  speedUp = (): void => console.log('Acelerando');
  speedDown = (): void => console.log('Freiando');
  stop = (): void => console.log('Parando');
  turn = (side: string): void => console.log(`Virando para a ${side}`);
}

const car = new Car('Gol', 'Prata', 4);

car.turnOn();
car.speedUp();
car.speedDown();
car.turn('esquerda');
car.speedUp();
car.speedDown();
car.turn('direita');
car.speedUp();
car.speedDown();
car.turn('direita');
car.speedUp();
car.stop();