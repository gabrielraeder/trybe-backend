const nameValidate = (req, res, next) => {
  if ('name' in req.body && req.body.name.length >= 4) {
    return next()
  } else {
    if ('name' in req.body && req.body.name.length < 4) {
      return res.status(400).json({ message: "O campo name deve ter pelo menos 4 caracteres" });
    } else {
      return res.status(400).json({ message: "O campo name é obrigatorio" });
    }
  }
}

module.exports = nameValidate;
