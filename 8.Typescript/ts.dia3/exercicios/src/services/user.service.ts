import UserModel from "../models/user.model";
import connection from "../models/connection";
import User from '../interfaces/user.interface';
import { NotFoundError } from 'restify-errors';

// const properties = ['name', 'email', 'password'];

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  };

  public async getAll(): Promise<User[]> {
    const result = await this.model.getAll();
    return result;
  };

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  };

  public async create(user: User): Promise<User> {
    const newUser = await this.model.create(user);
    return newUser;
  };

  public async update(id: number, user: User): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) throw new NotFoundError('User not found!');

    return this.model.update(id, user);
  };

  public async remove(id: number): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) throw new NotFoundError('User not found!');

    return this.model.remove(id);
  }
}