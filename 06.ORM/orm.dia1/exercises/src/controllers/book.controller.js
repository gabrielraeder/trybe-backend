const bookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getById(id);
    if (book) return res.status(200).json(book);
    return res.status(404).json({ message: 'Book not found' });
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    const newBook = await bookService.create(data);
    return res.status(201).json(newBook);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updated = await bookService.update(id, data);
    if (!updated) return res.status(404).json({ message: 'Book not found!'})
    return res.status(200).json({ message: 'Book updated!'});
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await bookService.remove(id);
    if (!updated) return res.status(404).json({ message: 'Book not found!'})
    return res.status(200).json({ message: 'Book deleted!'});
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getByAuthor = async (req, res) => {
  try {
    const { author } = req.query;
    const byAuthor = await bookService.getByAuthor(author);
    if (!byAuthor || byAuthor.length === 0) return res.status(404).json({ message: 'No books found!'})
    return res.status(200).json(byAuthor);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
}