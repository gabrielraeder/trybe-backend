const fs = require('fs').promises;
const { join } = require('path');

const basepath = '/files/$.json';

const readJSON = async (fileName) => {
  const path = basepath.replace('$', fileName);
  const destinations = await fs.readFile(join(__dirname, path), 'utf-8');
  return JSON.parse(destinations);
}

const writeJSON = async (fileName, data) => {
  const path = basepath.replace('$', fileName);
  const oldDest = await readJSON(fileName);
  const newDests = [...oldDest, data]
  await fs.writeFile(join(__dirname, path), JSON.stringify(newDests));
}

const writeTokenJSON = async (token) => {
  const oldTokens = await fs.readFile('./authdata.json', 'utf-8');
  const data = JSON.parse(oldTokens);
  data.push(token)
  await fs.writeFile('./authdata.json', JSON.stringify(data));
}

module.exports = {
  readJSON,
  writeJSON,
  writeTokenJSON,
}
