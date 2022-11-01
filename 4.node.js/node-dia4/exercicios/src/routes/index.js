const express = require('express');
const activitiesRouter = require('./activities.route');
const signupRouter = require('./signup.route');

const router = express.Router();
router.use('/activities', activitiesRouter);
router.use('/signup', signupRouter);

module.exports = router;
