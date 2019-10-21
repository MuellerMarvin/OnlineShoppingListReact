const express = require('express');
const app = express();

const listRoutes = require('./api/routes/lists');

app.use('/lists', listRoutes);

module.exports = app;
