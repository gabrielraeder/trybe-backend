import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await this.userService.login(email, password);
    return res.status(200).json({ token });
  };

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(200).json(users);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.getById(+id);
    return res.status(200).json(user);
  };

  public create = async (req: Request, res: Response) => {
    const data = req.body;
    const newUser = await this.userService.create(data);
    return res.status(201).json(newUser);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {name, email, password, decoded } = req.body;
    await this.userService.update(+id, { name, email, password }, decoded);
    res.status(204).end();
  };

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { decoded } = req.body;
    await this.userService.remove(+id, decoded);
    res.status(204).end();
  };
};