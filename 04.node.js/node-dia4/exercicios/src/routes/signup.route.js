const express = require('express');
const { writeJSON, writeTokenJSON } = require('../fsUtils');
const signupValidate = require('../middlewares/signupValidate');
const generateToken = require('../cryptoGenerator')

const router = express.Router();

router.post('/', signupValidate, async (req, res) => {
  const data = req.body;
  const token = generateToken();
  const user = {...data, token }
  await writeJSON('users', user);
  await writeTokenJSON(token);
  res.status(200).json({ token });
})

module.exports = router;