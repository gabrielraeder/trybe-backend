import Clube from "./classes/Clube";
import QuadraFutebol from "./classes/QuadraFutebol";
import QuadraTenis from "./classes/QuadraTenis";

const clube = new Clube();
const quadraFut = new QuadraFutebol();
const quadraTenis = new QuadraTenis();

clube.adicionarQuadra(quadraFut);
clube.adicionarQuadra(quadraTenis);

console.log(clube.buscarQuadras());

console.log(quadraTenis.reservar(new Date()));



