import IAgenda from "../interfaces/IAgenda.interface";
import ITenis from "../interfaces/ITenis.interface";
import normas from "../normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraTenis extends Quadra {
  public tenisData: ITenis = normas.tenis;

  public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return ({
      protocol: protocolo,
      data: horaReserva,
      rules: this.tenisData as unknown as ITenis,
    })
  }
}