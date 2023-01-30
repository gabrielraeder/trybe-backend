import { NextFunction, Request, Response } from 'express';
import Post from '../interfaces/post.interface';

function validatePost(req: Request, res: Response, next: NextFunction) {
  const data: Post = req.body;
  const { title, author, category, publicationDate } = data;
  if (!title || !author || !category || !publicationDate) {
    return res.status(400).json({ message: 'Campos faltando.'});
  }
  if (author.length < 3 || category.length < 3) {
    return res.status(400).json({ message: 'Campo inválido.'});
  }
  const regex = /^\d{4}$(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])/i
  if (!regex.test(JSON.stringify(publicationDate))) {
    return res.status(400).json({ message: 'Data com formato inválido' })
  }
  next();
};

export { validatePost };