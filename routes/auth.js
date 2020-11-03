const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { authCheck } = require('./../controllers/auth');

// @route  GET api/auth
router.get('/', auth, authCheck);

module.exports = router;
