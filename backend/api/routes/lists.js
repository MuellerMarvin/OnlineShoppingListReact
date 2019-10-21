const express = require('express');
const router = express.Router();

var list = [ 'apples', 'bananas', 'cucumbers', 'coconuts', 'oranges', 'pineapples', 'lemons' ];

router.get('/', (req, res, next) => {
    console.log("Received GET request on '/lists'")
    res.status(200).json({
        list: list,
    });
});

router.post('/', (req, res, next) => {
    console.log("Received POST request on '/lists'")
    res.status(200).json({
        message: 'Handling POST requests to /lists',
    });
});

router.patch('/'), (req, res, next) => {
    console.log("Received PATCH request on '/lists'")
    res.status(200).json({
        message: 'Handling PATCH requests to /lists',
    });
}

module.exports = router;