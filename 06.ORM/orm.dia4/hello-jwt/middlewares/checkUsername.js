const { findOne } = require('../models/user');

module.exports = async (req, res, next) => {
  const { username } = req.body;
  const findUser = await findOne(username);
  if (findUser) return res.status(409).json({ error: { message: 'user already exists' }});
  return next();
}