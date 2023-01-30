const signupValidate = (req, res, next) => {
  const requiredProps = ['email', 'password', 'firstName', 'phone'];
  const data = req.body;
  if (requiredProps.every(prop => prop in data)) {
    return next();
  }
  const error = {
    statusCode: 401,
    message: "Campos ausentes!",
  }
  return next(error);
}

module.exports = signupValidate;
