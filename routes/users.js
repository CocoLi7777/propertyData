const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/users');
const { check } = require('express-validator/check');

// @route  GET api/users
// @access public

router.post(
  '/',
  [
    check('name', 'Please input your name').not().isEmpty(),
    check('email', 'Please input a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more character'
    ).isLength({ min: 6 }),
  ],
  createUser
);

module.exports = router;
