import { DbCharacter, Character, db } from "../interfaces/Character.interface";
import IModel from "../interfaces/IModel.interface";

export default class LocalDbModel implements IModel {
  async create (character: Character): Promise<DbCharacter> {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newChar = { id: lastId + 1, ...character };
    db.push(newChar);
    return newChar;
  };

  findIndexById = (id:number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  }

  async update (id: number, character: Character): Promise<DbCharacter> {
    const index = this.findIndexById(id);
    db[index] = { ...db[index], ...character };
    return db[index];
  };

  async delete (id: number): Promise<boolean> {
    const index = this.findIndexById(id);
    db.splice(index, 1);
    return true;
  };
  async getAll (): Promise<DbCharacter[]> {
    return db
  };

  async getById (id: number): Promise<DbCharacter> {
    const index = this.findIndexById(id);
    return db[index];
  };
}