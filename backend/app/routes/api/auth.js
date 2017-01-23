var express = require('express');
var mongodb = require('mongodb');
var user = require('../../models/user')
var router = express.Router();

router.post('/login', function(req, res) {
    user.attempt_login(req.db, req.body.username, req.body.password,
        function(result) {
            var resource = {
                'success': result ? true : false,
                'user': user.public_user(result),
                'error': !result ? 'User not found.' : '',
            };
            res.json(resource);
        }
    );
});

router.post('/register', function(req, res) {
    user.create_account(req.db, req.body.username, req.body.password,
        function(result) {
            var resource = {
                'success': result.insertedCount ? true : false,
                'user': user.public_user(result.doc),
                'error': result.error,
            };
            res.json(resource);
        }
    );
});

module.exports = router;
