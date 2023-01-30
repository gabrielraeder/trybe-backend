const createAtValidate = (req, res, next) => {
  const { description } = req.body;
  const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (regex.test(description.createdAt)) {
    return next();
  }
  return res.status(400).json(
    { message: `O campo createdAt deve ter o formato \'dd/mm/aaaa\'"` },
  );
}

module.exports = createAtValidate;
