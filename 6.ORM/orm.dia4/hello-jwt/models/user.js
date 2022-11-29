// src/models/User.js

const path = require('path');
const fs = require('fs').promises;

/* Utilizamos o módulo `path` para calcular o caminho até o arquivo `users.json` */
const DATA_PATH = path.join(__dirname, 'data', 'users.json');

/* Para obter todos os itens, lemos o arquivo `users.json, */
/* realizamos o parsing e retornamos o resultado */
const getAll = async () => fs.readFile(DATA_PATH, 'utf-8').then(JSON.parse);

/* Para alterar o arquivo `users.json`, recebemos um array, */
/* Convertemos o array em JSON e escrevemos o resultado no disco */
const writeAll = async (content) =>
  fs.writeFile(DATA_PATH, JSON.stringify(content));

/* Para encontrar um item, lemos todos os itens e utilizamos o método `find` do array */
const findOne = (username) =>
  getAll().then((users) => users.find((user) => user.username === username));

/* Para criar um novo registro */
const create = (username, password, admin) =>
  /* Buscamos todos os itens */
  getAll()
    .then((users) => {
      /* Adicionamos o item novo */
      users.push({ username, password, admin });
      return users;
    })
    /* Armazenamos o Array no disco */
    .then(writeAll);

module.exports = {
  getAll,
  findOne,
  create,
};
