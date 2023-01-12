import Character from "./classes/abstract/Character"
import CharacterService from "./classes/CharacterService";
import LocalDbModel from "./classes/LocalDbModel";
import LongRangeCharacter from "./classes/LongRangeCharacter";
import MeleeCharacter from "./classes/MeleeCharacter";
import MockedDbModel from "./classes/MockedDbModel";

// const myFunc = (char: Character) => {
//   char.talk();
//   char.specialMove();
// }

// const warrior = new MeleeCharacter();
// const archer = new LongRangeCharacter();

// myFunc(warrior);
// myFunc(archer);

const a = new CharacterService(new LocalDbModel());
const b = new CharacterService(new MockedDbModel());

a.getAll().then(console.log);
b.getAll().then(console.log);
