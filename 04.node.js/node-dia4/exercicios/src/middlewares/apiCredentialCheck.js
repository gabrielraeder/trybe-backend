const fs = require('fs/promises');
const { readJSON } = require('../fsUtils');

const apiCredentialsCheck = async (req, res, next) => {
  const token = req.header('Authorization');
  const users = await readJSON('users');
  const validatedUser = users.find((u) => u.token === token);
  if (validatedUser && token.length === 16) {
    req.userON = validatedUser;
    next();
  } else {
    res.status(401).json({ "message": "Token inválido!" });
  }
}

module.exports = apiCredentialsCheck;
