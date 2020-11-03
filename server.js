const express = require('express');
const connectDB = require('./config/db');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

const app = express();

connectDB();

app.use(express.json());

app.use(helmet());

app.use(xss());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 10 mins
  max: 10,
});
app.use(limiter);

app.use(hpp());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//define routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/properties', require('./routes/properties'));
app.use('/api/v1/users', require('./routes/users'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
