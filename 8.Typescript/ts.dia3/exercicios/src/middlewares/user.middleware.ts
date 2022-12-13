import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/user.interface';

function validateUser(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body;
  const { name, password, email } = user;
  if (!name || !password || !email) {
    return res.status(400).json({ message: 'Campos faltando.'});
  }
  if (password.length < 6 || password.length >= 12) {
    return res.status(400).json({ message: 'Senha inválida.'});
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'Nome de tamanho inválido.'});
  }
  const regex = /[a-z0-9]+@[a-z]+\.[a-z]/;
  if (!regex.test(email)) {
    return res.status(400).json({ message: 'email inválido.'});
  }
  next();
};

export { validateUser };