const express = require('express');
const peopleRoutes = require('./people.routes');

const router = express.Router();
router.use('/people', peopleRoutes);

module.exports = router;