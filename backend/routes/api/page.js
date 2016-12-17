var express = require('express');
var router = express.Router();

router.get('/page/:id', function(req, res) {
    var id = req.params.id;
    var resource = {
        'entry': {
            'title': 'Test',
            'entry': 'Testing a new post!',
        },
    };
    res.json(resource);
});

router.post('/page/create', function(req, res) {
    var resource = {
        'page': {
            'title': 'Test',
            'content': 'Testing a new post!',
        },
    };
    res.json(resource);
});

module.exports = router;
