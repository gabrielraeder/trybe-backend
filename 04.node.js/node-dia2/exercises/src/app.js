const express = require('express');
const { readMovies, addNewMovie, updateMovie, deleteMovie } = require('./fsFunctions');

const app = express();

app.use(express.json());

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readMovies();
    if (q) {
      const filteredMovies = movies.filter((element) => element.movie.toLowerCase().includes(q.toLowerCase()));
      return res.status(200).json(filteredMovies);
    }
    res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();

  const movieByID = movies.find((m) => m.id === +id);

  if (!movieByID) {
    res.status(404).json({ message: 'Movie not found' });
  }

  res.status(200).json({ movie: movieByID })
});

app.get('/movies', async (req, res) => {
  const movies = await readMovies();

  res.status(200).json({ movies })
});

app.post('/movies', async (req, res) => {
  const newMovie = req.body;
  await addNewMovie(newMovie);
  const allMovies = await readMovies();
  res.status(200).json({ allMovies });
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const newMovies = await updateMovie(Number(id), updatedData);
  res.status(200).json({ newMovies });
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const newMovies = await deleteMovie(Number(id));
  res.status(200).json({ newMovies });
})

module.exports = app;
