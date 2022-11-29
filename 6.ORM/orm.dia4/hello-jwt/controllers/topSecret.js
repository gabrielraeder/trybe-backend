module.exports = (req, res) => {
  const { admin } = req.decoded;
  if (!admin) return res.status(401).json({ error: { message: 'Restricted access' }});
  return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
};