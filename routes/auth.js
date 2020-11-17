const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { authCheck, login } = require('./../controllers/auth');
const { check } = require('express-validator/check');

// @route  GET api/auth
router.get('/', auth, authCheck);

router.post(
  '/',
  [
    check('email', 'Please input a valid email').isEmail(),
    check('password', 'Please enter the password').exists(),
  ],
  login
);

module.exports = router;
