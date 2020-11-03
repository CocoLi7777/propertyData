const express = require('express');
const router = express.Router();
const {
  getProperties,
  getProperty,
  createProperty,
} = require('../controllers/properties');
const { check } = require('express-validator/check');

// @route  GET api/users
// @access public
router.get('/', getProperties);
router.get('/:propertyId', getProperty);
router.post(
  '/',
  [
    check('propertyId', 'Please input the propertyId').not().isEmpty(),
    check('propertyName', 'Please input the name of property').not().isEmpty(),
  ],
  createProperty
);

module.exports = router;
