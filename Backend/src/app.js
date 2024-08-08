const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const UsergameRoutes = require('./routes/userGameRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/user-games', UsergameRoutes);

module.exports = app;