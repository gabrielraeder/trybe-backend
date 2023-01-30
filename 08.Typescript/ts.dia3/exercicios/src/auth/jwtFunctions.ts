import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserForToken } from '../interfaces/jwt.interface';

dotenv.config();

const secret = process.env.JWT_SECRET || 'seuSegredoAqui';

const createToken = (userWithoutPassword: UserForToken) => {
  const token = jwt.sign({ data: userWithoutPassword }, secret, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
  return token;
};

const verifyToken = (authorization: string) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};


export { createToken, verifyToken };