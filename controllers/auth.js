const express = require('express');
const ErrorHandling = require('../utils/errorHandling');
const User = require('./../models/User');

exports.authCheck = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
