const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');
const { mockFile } = require('../mocks/mockFile')

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
    sinon.stub(fs.promises, 'writeFile')
      .resolves();
  });

  afterEach(function () {
    sinon.restore();
  });
  
  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];
  
      const response = await chai
        .request(app)
        .get('/chocolates');
  
      expect(response.status).to.be.equal(200);
  
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna o total de chocolates', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body.totalChocolates).to.be.equal(4);
    });
  });

  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna os chocolates pesquisados com "Mo"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');

      const output = [
        {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
        },
        {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
        }
      ]

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(output);
    });

    it('Retorna array vazio pesquisando com "ZZZ"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=ZZZ');

      const output = []

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal(output);
    });
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('passando id = 1', async function () {
      const sendObj = { 
        name: "Mint Pretty Good",
        brandId: 2
      }

      const response = await chai
        .request(app)
        .put('/chocolates/1').send(sendObj);

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate.id).to.equal(1);
      expect(response.body.chocolate.name).to.equal("Mint Pretty Good");
      expect(response.body.chocolate.brandId).to.equal(2);
    });

    it('passando id = 555', async function () {
      const sendObj = { 
        name: "Mint Good!!",
        brandId: 2
      }

      const response = await chai
        .request(app)
        .put('/chocolates/555').send(sendObj);

      expect(response.status).to.be.equal(404);
      expect(response.body.message).to.equal("chocolate not found");
    });
  });

  describe('Usando o método POST em /chocolates', function () {
    it('passando info corretamente', async function () {
      const sendObj = { 
        name: "Mint Pretty Good!!",
        brandId: 2
      }

      const response = await chai
        .request(app)
        .post('/chocolates').send(sendObj);

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.have.length(5);
      expect(response.body.chocolates[4].name).to.equal("Mint Pretty Good!!");
      expect(response.body.chocolates[4].brandId).to.equal(2);
      expect(response.body.chocolates[4].id).to.equal(5);
    });

    it('passando info sem brandId', async function () {
      const sendObj = { 
        name: "Mint Pretty Good!!"
      }

      const response = await chai
        .request(app)
        .post('/chocolates').send(sendObj);

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({message: "missing information"});
    });

    it('passando info sem name', async function () {
      const sendObj = { 
        brandId: 2
      }

      const response = await chai
        .request(app)
        .post('/chocolates').send(sendObj);

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({message: "missing information"});
    });

    it('passando sem info', async function () {
      const response = await chai
        .request(app)
        .post('/chocolates').send();

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({message: "missing information"});
    });
  });
})

