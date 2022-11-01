const signupValidate = (req, res, next) => {
  const requiredProps = ['email', 'password', 'firstName', 'phone'];
  const data = req.body;
  if (requiredProps.every(prop => prop in data)) {
    return next();
  }
  return res.status(401).json({ message: "Campos ausentes!" })
}

module.exports = signupValidate;
