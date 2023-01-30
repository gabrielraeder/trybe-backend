const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: ['title'],
  });
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book
};

const create = async (data) => {
  const newBook = await Book.create(data);
  return newBook;
};

const update = async (id, data) => {
  const [updated] = await Book.update(
    data,
    { where: { id }},
  )
  return updated;
};

const remove = async (id) => {
  const user = await Book.destroy({ where: { id }});
  return user;
};

const getByAuthor = async (query) => {
  const byAuthor = await Book.findAll({
    where: { author: query },
    order: ['title'],
  });
  return byAuthor;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor
}