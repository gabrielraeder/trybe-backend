const ratingValidate = (req, res, next) => {
  const { description: { rating } } = req.body;
  const between = rating >= 1 && rating <= 5;
  if (Number.isInteger(rating) && between) {
    return next();
  }
  const error = {
    statusCode: 401,
    message: "O campo rating deve ser um número inteiro entre 1 e 5",
  }
  return nest(error);
}

module.exports = ratingValidate;
