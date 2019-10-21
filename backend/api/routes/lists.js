const express = require('express');
const router = express.Router();

var list = [ 'apples', 'cucumbers', 'coconuts', 'oranges', 'pineapples', 'lemons' ];

router.get('/', (req, res, next) => {
    console.log("Received GET request on '/lists'")
    res.status(200).json({
        list: list,
    });
});

router.post('/', (req, res, next) => {
    console.log("Received POST request on '/lists'");
    list = req.body.list;
    res.status(200).json({
        list: list,
    });
});

module.exports = router;