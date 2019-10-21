const express = require('express');
const app = express();

const listRoutes = require('./api/routes/lists');

// general config for all routes
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// routes
app.use('/lists', listRoutes);

module.exports = app;
