var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list/:offset', function(req, res) {
    var offset = req.params.offset;
    var resource = {
        'name': 'Magnie',
    };
    res.json(resource);
});

module.exports = router;
