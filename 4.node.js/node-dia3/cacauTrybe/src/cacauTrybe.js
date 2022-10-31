const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getChocolatesByName = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((choc) => choc.name.toLowerCase().includes(name.toLowerCase()))
}

const updateChocolate = async (id, data) => {
  const cacauTrybe = await readCacauTrybeFile();
  const isIDTrue = cacauTrybe.chocolates.find((choc) => choc.id === id);
  if (!isIDTrue) return { "message": "chocolate not found" };
  const updatedData = { id, ...data };
  const newChocolates = cacauTrybe.chocolates.reduce((list, current) => {
    if (current.id === id) return [...list, updatedData];
    return [...list, current];
  }, []);

  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify({...cacauTrybe, chocolates: newChocolates}));
    return { chocolate: updatedData };
  } catch(e) {
    console.error(`Erro na escrita do arquivo: ${e.message}.`);
  }
}

const addNewChocolate = async (data) => {
  const cacauTrybe = await readCacauTrybeFile();
  const lastItem = cacauTrybe.chocolates.find((choc) => choc.id === cacauTrybe.chocolates.length);
  const newChoc = { id: lastItem.id + 1, ...data };
  const chocolates = [...cacauTrybe.chocolates, newChoc];

  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify({...cacauTrybe, chocolates}));
    return {...cacauTrybe, chocolates};
  } catch(e) {
    console.error(`Erro na escrita do arquivo: ${e.message}.`);
  }
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesByName,
  updateChocolate,
  addNewChocolate,
};