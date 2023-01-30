const chai = require('chai');
const chaiHttp = require('chai-http');
const cacauTrybe = require('../../src/cacauTrybe');
const sinon = require('sinon');
const fs = require('fs');
const { mockFile } = require('../mocks/mockFile')

const { expect } = chai;

chai.use(chaiHttp);

const chocolateList = JSON.parse(mockFile);

describe('Testando funções de cacauTrybe.js', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
    sinon.stub(fs.promises, 'writeFile')
      .resolves();
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('readCacauTrybeFile', function () {
    it('Successfully returns', async function () {
      const response = await cacauTrybe.readCacauTrybeFile();
      expect(response).to.be.instanceOf(Object);
      expect(response).to.deep.equal(chocolateList)
    });
  })

  describe('getAllChocolates', function () {
    it('Successfully returns', async function () {
      const response = await cacauTrybe.getAllChocolates();
      expect(response).to.be.instanceOf(Array);
      expect(response).to.deep.equal(chocolateList.chocolates)
    });
  })

  describe('getChocolateById', function () {
    it('Successfully returns', async function () {
      const response = await cacauTrybe.getChocolateById(1);
      const findById = chocolateList.chocolates.find((c) => c.id === 1);
      expect(response).to.be.instanceOf(Object);
      expect(response).to.deep.equal(findById);
    });

    it('id doesnt exists', async function () {
      const response = await cacauTrybe.getChocolateById(10);
      const findById = chocolateList.chocolates.find((c) => c.id === 10);
      expect(response).to.be.equal(undefined);
      expect(response).to.deep.equal(findById);
    });
  })

  describe('getChocolatesByBrand', function () {
    it('Successfully returns', async function () {
      const response = await cacauTrybe.getChocolatesByBrand(1);
      const brandById = chocolateList.chocolates.filter((b) => b.brandId === 1);
      expect(response).to.be.instanceOf(Array);
      expect(response).to.deep.equal(brandById);
    });

    it('id doesnt exists', async function () {
      const response = await cacauTrybe.getChocolatesByBrand(10);
      const brandById = chocolateList.chocolates.find((b) => b.brandId === 10);
      expect(response).to.be.instanceOf(Array);
      expect(response).to.have.length(0);
    });
  })

  describe('getChocolatesByName', function () {
    it('Successfully returns', async function () {
      const response = await cacauTrybe.getChocolatesByName('Mo');
      expect(response).to.be.instanceOf(Array);
      expect(response).to.have.length(2);
    });

    it('search doesnt return', async function () {
      const response = await cacauTrybe.getChocolatesByBrand('zzzz');
      expect(response).to.be.instanceOf(Array);
      expect(response).to.have.length(0);
    });
  });

  describe('updateChocolate', function () {
    it('Successfully returns', async function () {
      const updated = {id: 1,  name: "Mint Pretty Good", brandId: 2 };
      const response = await cacauTrybe.updateChocolate(1, { name: "Mint Pretty Good", brandId: 2});
      expect(response).to.be.instanceOf(Object);
      expect(response.chocolate).to.deep.equal(updated);
    });

    it('id doesnt exists', async function () {
      const returnMessage = { message: "chocolate not found" };
      const response = await cacauTrybe.updateChocolate(11, { name: "Mint Pretty Good", brandId: 2});
      expect(response).to.be.instanceOf(Object);
      expect(response).to.deep.equal(returnMessage);
    });
  });

  describe('addNewChocolate', function () {
    it('Successfully returns', async function () {
      const response = await cacauTrybe.addNewChocolate({ name: "Mint Good", brandId: 2});
      expect(response).to.be.instanceOf(Object);
      expect(response.chocolates).to.have.length(5);
      expect(response.chocolates[4].id).to.equal(5);
      expect(response.chocolates[4].name).to.equal('Mint Good');
      expect(response.chocolates[4].brandId).to.equal(2);
    });
  });
});
