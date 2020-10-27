const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());

//define routes

app.use('/api/v1', require('./routes/properties'));
/*
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
*/
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
