const getMe = (req, res) => {
  try {
    const { data, admin } = req.decoded;
    return res.status(200).json({ username: data.username, admin });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno!', error: e.message });
  }
}

module.exports = {
  getMe,
}