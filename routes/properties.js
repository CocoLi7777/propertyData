const express = require('express');
const router = express.Router();
const {
  getProperties,
  getProperty,
  createProperty,
} = require('../controllers/properties');

// @route  GET api/users
// @access public
router.route('/').get(getProperties);
router.route('/:propertyId').get(getProperty);
router.route('/').post(createProperty);

router.use('/', express.static('client'));

module.exports = router;
