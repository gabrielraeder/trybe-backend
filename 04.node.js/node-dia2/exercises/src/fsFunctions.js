const fs = require('fs').promises;
const path = require('path');

const MOVIES_PATH = './movies.json';

const readMovies = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, MOVIES_PATH));
    return JSON.parse(data);
  } catch(e) {
    console.error(`Erro ao ler o arquivo: ${e.message}`);
  }
};

const addNewMovie = async (newMovie) => {
  const movies = await readMovies();
  movies.push({ ...newMovie, id: movies.length + 1 });
  await fs.writeFile(path.resolve(__dirname, MOVIES_PATH), JSON.stringify(movies));
}

const updateMovie = async (id, updatedData) => {
  const oldMovies = await readMovies();
  const updatedMovie = {id, ...updatedData };
  console.log(updatedMovie);
  const newMovies = oldMovies.reduce((list, current) => {
    if (current.id === id) return [...list, updatedMovie];
    return [...list, current];
  }, []);
  try {
    await fs.writeFile(path.resolve(__dirname, MOVIES_PATH), JSON.stringify(newMovies));
    console.log(`Filme de ID ${id} atualizado.`);
    return newMovies;
  } catch(e) {
    console.error(`Erro na escrita do arquivo: ${e.message}.`);
  }
}

const deleteMovie = async (id) => {
  const oldMovies = await readMovies();
  const newMovies = oldMovies.filter((m) => m.id !== id);
  try {
    await fs.writeFile(path.resolve(__dirname, MOVIES_PATH), JSON.stringify(newMovies));
    console.log(`Filme de ID "${id}" removido.`);
    return newMovies;
  } catch(e) {
    console.error(`Erro na escrita do arquivo: ${e.message}.`);
  }
}

module.exports = {
  readMovies,
  addNewMovie,
  updateMovie,
  deleteMovie
};
