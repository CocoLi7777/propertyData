const express = require('express');
const router = express.Router();
const {
  getProperties,
  getProperty,
  createProperty,
} = require('../controllers/properties');

// @route  GET api/users
// @access public
router.route('/properties').get(getProperties);
router.route('/properties/:propertyId').get(getProperty);
router.route('/properties').post(createProperty);

module.exports = router;
