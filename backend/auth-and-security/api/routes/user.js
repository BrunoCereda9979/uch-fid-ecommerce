const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Getting user...'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Posting user...'
    })
});

module.exports = router;