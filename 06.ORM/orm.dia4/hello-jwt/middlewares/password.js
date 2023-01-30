module.exports = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 5) return res.status(400).json({ message: 'Invalid password' });
  return next()
};