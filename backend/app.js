const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const listRoutes = require('./api/routes/lists');

// general config for all routes
// Add headers
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
// Add body parser for json
app.use(bodyParser.json());

// routes
app.use('/lists', listRoutes);

module.exports = app;
