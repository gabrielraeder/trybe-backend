import { DbCharacter, Character, db } from "../interfaces/Character.interface";
import LocalDbModel from "./LocalDbModel";
import IModel from '../interfaces/IModel.interface'

export default class CharacterService {
  constructor(readonly model: IModel) {}

  async create(character: Character) {
    const newChar = await this.model.create(character);
    return ({ status: 201, data: newChar });
  }

  async update(id: number, character: Character) {
    const updatedChar = await this.model.update(id, character);
    return ({ status: 200, data: updatedChar });
  }

  async delete(id:number) {
    const deleted = await this.model.delete(id);
    if (deleted) return ({ status: 200, data: 'Character Removed'})
  }

  async getAll(){
    const all = await this.model.getAll();
    return ({ status: 200, data: all });
  }

  async getById(id:number) {
    const byID = await this.model.getById(id);
    return ({ status: 200, data: byID });
  }
}