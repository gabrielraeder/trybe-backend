const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const bookModel = require('../../../src/models/book.model');

describe('Model BOOK', () => {
  const Book = bookModel(sequelize, dataTypes);
  const book = new Book();

  describe('Possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  describe('possui as propriedades corretas', () => {
    ['title', 'author', 'pageQuantity', 'publisher', 'createdAt'].forEach(checkPropertyExists(book));
  });
});
