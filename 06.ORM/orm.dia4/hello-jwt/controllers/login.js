require('dotenv/config');
const jwt = require('jsonwebtoken');
const { findOne } = require('../models/user');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const data = req.body;
    const { username, password } = data;
    const findUser = await findOne(username);
    if (!findUser || findUser.password !== password) {
      const message = {
        error: {
          code: 'invalidCredentials',
          message: 'Invalid username or password',
        },
      };
      return res.status(400).json(message);
    };

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data, admin: findUser.admin }, secret, jwtConfig);
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e.message });
  }
};