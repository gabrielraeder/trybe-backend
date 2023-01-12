import Quadra from "./Quadra";
import IAgenda from "../interfaces/IAgenda.interface";
import IFutebol from "../interfaces/IFutebol.interface";
import normas from "../normas/normasDeUso";

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;

  public reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);

    return ({
      protocol: protocolo,
      data: horaReserva,
      rules: this.futebolData as unknown as IFutebol,
    })
  }
}