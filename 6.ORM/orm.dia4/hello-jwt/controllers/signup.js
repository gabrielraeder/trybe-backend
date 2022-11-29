require('dotenv/config');
const jwt = require('jsonwebtoken');
const { create } = require('../models/user');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = (req, res) => {
  const { username, password } = req.body;
  const random = Math.floor(Math.random() * 100);
  let admin = false;
  if (random > 50) admin = true;
  create(username, password, admin);

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ username, admin }, secret, jwtConfig);
  return res.status(200).json({ token });
};