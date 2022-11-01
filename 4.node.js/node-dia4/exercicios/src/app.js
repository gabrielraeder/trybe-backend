// app.js
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const router = require('./routes')

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(router);


// ERROS
app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado!! Mensagem: ${err.message}` });
});

module.exports = app;
