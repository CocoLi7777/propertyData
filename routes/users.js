const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/users');

// @route  GET api/users
// @access public

router.route('/').post(createUser);

router.use('/', express.static('client'));

module.exports = router;
