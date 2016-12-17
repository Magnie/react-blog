// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
var database, callback;
MongoClient.connect("mongodb://localhost:27017/react_blog", function(err, db) {
    if (!err) {
        console.log("We are connected");
        database = db;
    }
});

module.exports = function(cb) {
    return database;
    // if (typeof database != 'undefined') {
    //     cb(database); // If database is already define, I don't wait.
    // }
}
