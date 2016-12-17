var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

router.get('/entries/:offset', function(req, res) {
    var offset = req.params.offset;
    var entries = req.db.collection('entries');
    
    entries.find({}).sort({created: -1}).toArray(function(err, docs) {
        var resource = {
            'entries': docs,
        };
        res.json(resource);
    }); 
});

router.get('/entry/:id', function(req, res) {
    var id = req.params.id;
    var query = {
        '_id': mongodb.ObjectID(id),
    };
    var entries = req.db.collection('entries');
    entries.findOne(query, function(err, item) {
        console.log(err);
        var resource = {
            'entry': item,
        };
        res.json(resource);
    });
});

router.post('/entry/create', function(req, res) {
    var new_entry = {
        'title': req.body.title,
        'entry': req.body.entry,
        'created': new Date().toISOString(),
    };
    var entries = req.db.collection('entries');
    entries.insertOne(new_entry, function(err, result) {
        var resource = {
            'count': result.insertedCount,
            'document': result.ops[0],
        };
        res.json(resource);
    });
});

module.exports = router;
