const express = require('express');
const ErrorHandling = require('../utils/errorHandling');
const Property = require('../models/Properties');
const { validationResult } = require('express-validator/check');

// Get all properies: GET /api/v1/properties

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find().select('propertyId propertyName');
    res.status(200).json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get single property  GET /api/v1/properties/:propertyId
exports.getProperty = async (req, res, next) => {
  const property = await Property.findOne({
    propertyId: req.params.propertyId,
  });

  if (!property) {
    return next(
      new ErrorHandling(
        `Property not found with id of ${req.params.propertyId}`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: property });
};

// Create new property  POST /api/v1/properties

exports.createProperty = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const checkProperty = await Property.findOne({
      propertyId: req.body.propertyId,
    });
    if (checkProperty) {
      return next(
        new ErrorHandling(
          `The Property has been existed, please add a differnt one`,
          400
        )
      );
    } else {
      const property = await Property.create(req.body);

      res.status(201).json({
        success: true,
        data: property,
      });
    }
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
