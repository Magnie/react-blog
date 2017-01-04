var express = require('express');
var mongodb = require('mongodb');
var entries = require('../../models/entries')
var router = express.Router();

router.get('/entries/:offset', function(req, res) {
    var offset = req.params.offset;
    entries.get_entries(req.db, offset, function(docs) {
        var resource = {
            'entries': docs,
        };
        res.json(resource);
    });
});

router.get('/entry/:id', function(req, res) {
    var id = req.params.id;
    entries.get_entry(req.db, id, function(item) {
        if (item) {
            var resource = {
                'entry': item,
            };
            res.json(resource);
        } else {
            var resource = {
                'entry': null,
            };
            res.json(resource);
        }
    });
});

router.post('/entry/create', function(req, res) {
    var new_item = {
        'title': req.body.title,
        'content': req.body.content,
        'created': new Date().toISOString(),
    };
    entries.new_entry(req.db, new_item, function(result) {
        var resource = {
            'count': result.insertedCount,
            'document': result.ops[0],
        };
        res.json(resource);
    });
});

module.exports = router;
