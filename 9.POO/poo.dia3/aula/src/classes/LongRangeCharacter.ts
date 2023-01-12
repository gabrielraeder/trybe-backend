import Character from "./abstract/Character";

export default class LongRangeCharacter extends Character {
  talk() {
    console.log('Arqueiro');
  }

  specialMove(): void {
      console.log('Atirar flecha');     
  }
}