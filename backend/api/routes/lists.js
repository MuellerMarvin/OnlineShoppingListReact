const express = require('express');
const router = express.Router();

var list = [ 'apples', 'cucumbers', 'coconuts', 'oranges', 'pineapples', 'lemons' ];

router.get('/', (req, res, next) => {
    // Write API-request to log
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log("[" + (new Date()).toUTCString() + " | " + ip + "] GET /lists");
    res.status(200).json({
        list: list,
    });
});

router.post('/', (req, res, next) => {
    // Write API-request to log
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log("[" + (new Date()).toUTCString() + " | " + ip + "] POST /lists -> " + (req.body.list.toString()));
    list = req.body.list;
    res.status(200).json({
        list: list,
    });
});

module.exports = router;