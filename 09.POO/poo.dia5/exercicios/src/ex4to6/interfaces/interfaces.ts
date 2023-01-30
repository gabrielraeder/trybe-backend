// ./interfaces.ts

export interface ICar {
  drive(): void;
}

export interface IAirplane {
  fly(): void;
}

export interface IVehicle extends ICar, IAirplane {}