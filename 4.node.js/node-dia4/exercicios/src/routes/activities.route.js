const express = require('express');
const { writeJSON } = require('../fsUtils');
const nameValidate = require('../middlewares/nameValidate');
const priceValidate = require('../middlewares/priceValidate');
const descriptionValidate = require('../middlewares/descriptionValidate');
const createAtValidate = require('../middlewares/createAtValidate');
const ratingValidate = require('../middlewares/ratingValidate');
const difficultyValidate = require('../middlewares/difficultyValidate');
const apiCredentialsCheck = require('../middlewares/apiCredentialCheck');

const router = express.Router();

router.post('/',
  apiCredentialsCheck,
  nameValidate,
  priceValidate,
  descriptionValidate,
  createAtValidate,
  ratingValidate,
  difficultyValidate, async (req, res) => {
  const data = req.body;
  await writeJSON('destinations', data);
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
})

module.exports = router;
