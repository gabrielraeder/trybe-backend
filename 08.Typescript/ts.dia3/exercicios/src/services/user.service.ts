import UserModel from "../models/user.model";
import connection from "../models/connection";
import User from '../interfaces/user.interface';
import { NotFoundError, BadRequestError } from 'restify-errors';
import { createToken } from "../auth/jwtFunctions";
import { UserForToken, Decoded } from "../interfaces/jwt.interface";

// const properties = ['name', 'email', 'password'];

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  };

  public async login(email: string, password: string): Promise<string> {
    const user = await this.model.getByEmail(email);
    if (!user) {
      throw new NotFoundError('User not found!');
    };
    if (user.password !== password) {
      throw new BadRequestError('Invalid Password');
    };
    const { password: _password, ...userWithoutPassword } = user;
    const token = createToken(userWithoutPassword as UserForToken);
    return token;
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
    const userFound = await this.model.getByEmail(user.email);
    if (userFound) {
      throw new BadRequestError('User Already Exists!');
    }
    const newUser = await this.model.create(user);
    return newUser;
  };

  public async update(id: number, user: User, decoded: Decoded): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) throw new NotFoundError('User not found!');
    if (decoded.data.id !== id) {
      throw new BadRequestError('Invalid user for update request');
    }

    return this.model.update(id, user);
  };

  public async remove(id: number, decoded: Decoded): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) throw new NotFoundError('User not found!');
    if (decoded.data.id !== id) {
      throw new BadRequestError('Invalid user for delete request');
    }
    return this.model.remove(id);
  }
}