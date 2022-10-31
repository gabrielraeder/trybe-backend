const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates/search', async (req, res) => {
  try {
    const { name } = req.query;
    const searched = await cacauTrybe.getChocolatesByName(name);
    if (searched.length === 0 || !name) {
      return res.status(404).json([]);
    }
    return res.status(200).json(searched);
  } catch(e) {
    res.status(500).send({ message: err.message });
  }
})

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  const totalChocolates = chocolates.length
  res.status(200).json({ totalChocolates });
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const updated = await cacauTrybe.updateChocolate(+id, updatedData);
  if (updated.message) return res.status(404).json(updated);
  return res.status(200).json(updated);
})

app.post('/chocolates', async (req, res) => {
  const data = req.body;
  if (!data.name || !data.brandId) {
    return res.status(404).json({message: "missing information"});
  }
  const all = await cacauTrybe.addNewChocolate(data);
  return res.status(200).json(all);
})

module.exports = app;