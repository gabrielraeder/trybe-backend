export interface Character {
  name: string;
  specialMove: string;
}

export interface DbCharacter extends Character {
  id: number;
}

export const db: DbCharacter[] = [];