import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

export default (req: Request, _res: Response, next: NextFunction) => {
  const {
    breed,
    needsSun,
    origin,
    size,
  } = req.body;

  if (typeof breed !== 'string') {
    throw new HttpException(400, 'Attribute "breed" must be string.');
  }

  if (typeof needsSun !== 'boolean') {
    throw new HttpException(400, 'Attribute "needsSun" must be boolean.');
  }

  if (typeof origin !== 'string') {
    throw new HttpException(400, 'Attribute "origin" must be string.');
  }

  if (typeof size !== 'number') {
    throw new HttpException(400, 'Attribute "size" must be number.');
  }

  return next();
};
