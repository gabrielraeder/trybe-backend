// src/server.js
require('dotenv').config();
const app = require('./app');

const port = 3001;

app.listen(port, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${port}`);
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
});