const priceValidate = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) {
    return res.status(400).json({ "message": "O campo price é obrigatório" });
  }
  if (price >= 0) {
    return next();
  } else {
    return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
  }
}

module.exports = priceValidate;
