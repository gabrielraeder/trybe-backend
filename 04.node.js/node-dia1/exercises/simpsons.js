const fs = require('fs').promises;
const path = require('path');

const SIMPSONS_PATH_NAME = './simpsons.json';

async function readSimpsons() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_PATH_NAME));
    return JSON.parse(data);
  } catch(e) {
    console.error(`Erro ao ler o arquivo: ${e.message}`);
  }
}

const logSimpsons = async () => {
  const simpsons = await readSimpsons();
  const mapped = simpsons.map((s) => console.log(`${s.id} - ${s.name}`))
  return mapped;
}

async function readOneSimpson(id) {
  try {
    const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_PATH_NAME));
    const findByID = JSON.parse(data).find((s) => +s.id === id);
    if (!findByID) throw new Error('id não encontrado');
    return findByID;
  } catch(e) {
    console.error(`error: ${e.message}`);
  }
}

async function main() {
  const simpson = await readOneSimpson(1);
  console.log(simpson);
}

async function rewriteSimpsons() {
  const simpsons = await readSimpsons();
  const removeTwo = simpsons.filter((s) => +s.id !== 10 && +s.id !== 6);
  await fs.writeFile(path.resolve(__dirname, SIMPSONS_PATH_NAME), JSON.stringify(removeTwo));
}

async function main2() {
    await rewriteSimpsons();
    const simpsons = await readSimpsons();
    console.log(simpsons);
  }

async function newJSONSimpsons() {
  const simpsons = await readSimpsons();
  const simpsonFamily = simpsons.filter((s) => +s.id <= 4);
  await fs.writeFile('./node-dia1/exercises/simpsonFamily.json', JSON.stringify(simpsonFamily));

}

async function addNelsonToFamily() {
  const simpsons = await readSimpsons();
  const simpsonFamilyWithNelson = simpsons.filter((s) => +s.id <= 4 || +s.id === 8);
  await fs.writeFile('./node-dia1/exercises/simpsonFamily.json', JSON.stringify(simpsonFamilyWithNelson));
}

async function nelsonForMaggie() {
  try {
    const simpsons = await readSimpsons();
    const maggie = simpsons.filter((s) => s.name === 'Maggie Simpson');
    const data = await fs.readFile(path.resolve(__dirname, './simpsonFamily.json'));
    const family = JSON.parse(data);
    const noNelson = family.filter((s) => s.name !== 'Nelson Muntz');
    const familyWithMaggie = [...noNelson, ...maggie]
    await fs.writeFile('./node-dia1/exercises/simpsonFamily.json', JSON.stringify(familyWithMaggie));
  } catch(e) {
    console.error(`error: ${e.message}`);
  }
}
