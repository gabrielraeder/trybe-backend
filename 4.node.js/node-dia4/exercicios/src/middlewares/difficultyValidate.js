const difficultyValidate = (req, res, next) => {
  const { description: { difficulty } } = req.body;
  console.log(difficulty);
  const types = ['Fácil', 'Médio', 'Difícil'];
  if (types.some(t => t === difficulty)) {
    return next();
  }
  return res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" })
}

module.exports = difficultyValidate;
