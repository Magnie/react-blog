var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var database = require('./config/database.js');

var index = require('./routes/routes');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());

var exposeDb = function(req, resp, next){
    req.db = database();
    next();
};
app.use(exposeDb);

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    var result = {
        'error': err,
        'status': err.status || 500,
        'message': err.message,
    };
    res.status(err.status || 500);
    res.json(result);
});

module.exports = app;
