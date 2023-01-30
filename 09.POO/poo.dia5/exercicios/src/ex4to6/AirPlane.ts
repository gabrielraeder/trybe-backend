import { IAirplane } from "./interfaces/interfaces";

export default class AirPlane implements IAirplane {
  fly(): void { console.log('Flying an Airplane'); }
}