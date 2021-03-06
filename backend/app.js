const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const listRoutes = require('./api/routes/lists');

// general config for all routes
// Add headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Add body parser for json
app.use(bodyParser.json());

// routes
app.use('/lists', listRoutes);

module.exports = app;
