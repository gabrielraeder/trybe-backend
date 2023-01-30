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
app.use((err, _req, res, _next) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({ message });
});

module.exports = app;
