const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user/:id/search', User.getByIdAndEmail);

app.get('/user', User.getAll);

app.get('/user/:id', User.getById);

app.post('/user', User.createUser);

app.put('/user/:id', User.updateUser);

app.delete('/user/:id', User.deleteUser);

module.exports = app;
