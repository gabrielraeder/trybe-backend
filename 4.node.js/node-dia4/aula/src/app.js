const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use('/images',express.static(__dirname + '/public'));

app.use(express.json());
app.use(router);

// se ninguém respondeu, vai cair neste middleware
app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;
