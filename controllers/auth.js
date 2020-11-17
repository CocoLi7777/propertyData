const ErrorHandling = require('../utils/errorHandling');
const User = require('./../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');

// GET api/auth
exports.authCheck = async (req, res) => {
  try {
    const user = await (await User.findById(req.user.id)).isSelected(
      '-password'
    );
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//POST api/auth
exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return next(new ErrorHandling('Invalid Credentials', 400));
    }

    const psMatch = await bcrypt.compare(password, user.password);
    if (!psMatch) {
      return next(new ErrorHandling('Invalid Credentials', 400));
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get('jwtKey'),
      { expiresIn: '2 days' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
