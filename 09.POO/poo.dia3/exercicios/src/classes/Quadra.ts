import IAgenda from "../interfaces/IAgenda.interface";

export default abstract class Quadra {
  protected abstract reservar<T>(horaReserva: Date): IAgenda<T>;
}