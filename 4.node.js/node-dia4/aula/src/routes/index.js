const express = require('express');
const teamsRouter = require('./teamsRouter');  

const router = express.Router();
router.use('/teams', teamsRouter);

module.exports = router;