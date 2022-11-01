const ratingValidate = (req, res, next) => {
  const { description: { rating } } = req.body;
  const between = rating >= 1 && rating <= 5;
  if (Number.isInteger(rating) && between) {
    return next();
  }
  return res.status(400).json(
    { message: "O campo rating deve ser um número inteiro entre 1 e 5" }
  );
}

module.exports = ratingValidate;
