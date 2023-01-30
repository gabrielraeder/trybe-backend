const { expect } = require('chai');
const sinon = require('sinon');

const { Book } = require('../../../src/models');
const bookService = require('../../../src/services/book.service');

const bookMock = require('./mocks/books.mocks');

describe('Camada SERVICE', function () {
  beforeEach(sinon.restore);

  it('test getAll', async function () {
    sinon.stub(Book, 'findAll').resolves(bookMock.books);

    const result = await bookService.getAll();

    expect(result).to.deep.equal(bookMock.books);
  });

  it('test getById with success', async function () {
    sinon.stub(Book, 'findByPk').resolves(bookMock.books[0]);

    const result = await bookService.getById(1);

    expect(result).to.deep.equal(bookMock.books.find(({ id }) => id === 1));
  });

  it('test getById with failure', async function () {
    sinon.stub(Book, 'findByPk').resolves(null);

    const result = await bookService.getById(555);

    expect(result).to.be.null;
  });

  it('test create', async function () {
    const testBook = {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      pageQuantity: 689
    };
    sinon.stub(Book, 'create').resolves({
      ...testBook,
      updatedAt: "2022-01-28T15:45:28.398Z",
      createdAt: "2022-01-28T15:45:28.398Z"
    });

    const result = await bookService.create(testBook);

    expect(result).to.include(testBook);
  });

  it('test update with success', async function () {
    const testBook = {
      title: "The Va Cinci Dode",
      author: "Ban Drown",
      pageQuantity: 589,
    };
    sinon.stub(Book, 'update').resolves([true]);

    const result = await bookService.update(2, testBook);

    expect(result).to.be.true;
  });

  it('test update with failure', async function () {
    const testBook = {
      title: "The Va Cinci Dode",
      author: "Ban Drown",
      pageQuantity: 589,
    };
    sinon.stub(Book, 'update').resolves([false]);

    const result = await bookService.update(555, testBook);

    expect(result).to.be.false;
  });

  it('test remove with success', async function () {
    sinon.stub(Book, 'destroy').resolves(true);

    const result = await bookService.remove(2);

    expect(result).to.be.true;
  });

  it('test remove with failure', async function () {
    sinon.stub(Book, 'destroy').resolves(false);

    const result = await bookService.remove(5555);

    expect(result).to.be.false;
  });

  it('test getByAuthor', async function () {
    sinon.stub(Book, 'findAll').resolves(bookMock.books.filter(({ author }) => author === 'J.R.R. Tolkien'));

    const result = await bookService.getByAuthor('J.R.R. Tolkien');

    expect(result.length).to.equal(3);
    expect(result).to.deep.equal(bookMock.books.filter(({ author }) => author === 'J.R.R. Tolkien'));
  });
});