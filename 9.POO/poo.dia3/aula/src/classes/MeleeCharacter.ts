import Character from "./abstract/Character";

export default class MeleeCharacter extends Character {
  talk() {
    console.log('Guerreiro');
  }

  specialMove(): void {
      console.log('Cortar');     
  }
}