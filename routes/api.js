const express = require('express');
const router = express.Router();

router.post('/log', function (req, res, next) {

    console.log(req.body);

    res.status(200).json({
        state: true,
    });
    
});


router.get('/log', function (req, res, next) {

    console.log(req.body);

    res.status(200).json({
        state: true,
        message:"App works"
    });
    
});

module.exports = router;