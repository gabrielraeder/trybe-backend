module.exports = (req, res, next) => {
  const { username } = req.body;
  if (username.length < 5) return res.status(400).json({ message: 'Invalid username' });
  return next()
};