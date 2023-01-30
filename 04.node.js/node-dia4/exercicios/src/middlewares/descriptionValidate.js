const validate = (descriptValue, res, value) => {
  if (!descriptValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
}

const descriptionValidate = (req, res, next) => {
  const { description } = req.body;

  return validate(description, res, 'description')
    || validate(description.createdAt, res, 'createdAt')
    || validate(description.rating, res, 'rating')
    || validate(description.difficulty, res, 'difficulty')
    || next();
};

module.exports = descriptionValidate;
