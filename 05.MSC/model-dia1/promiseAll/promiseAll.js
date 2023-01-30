const fs = require('fs').promises;
const { join } = require('path');

const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!'];

const main = async () => {
  try {
    await Promise.all(arr.map(async (item, index) => await fs.writeFile(join(__dirname, `file${index}.txt`), JSON.stringify(item))))
    const data = await Promise.all(arr.map(async(_i, index) => await fs.readFile(join(__dirname, `file${index}.txt`), 'utf-8')));
    const all = data.join(' ').replaceAll('"', '');
    console.log(all);
    await fs.writeFile(join(__dirname, `fileAll.txt`), JSON.stringify(all));
  } catch (err) {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  }
}

main();