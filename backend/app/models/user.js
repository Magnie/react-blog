var mongodb = require('mongodb');
var utils = require('./utils');

var versions = {
    1: {
        '_id': 'string',
        'version': 'number',
        'username': 'string',
        'passhash': 'string',
        'last_login': 'string',
    },
};

var version_scripts = {
    1: function(input_data) {
        var new_data = Object.assign({}, versions[1]);
        var data_keys = Object.keys(new_data);
        
        for (var key of data_keys) {
            new_data[key] = null;
        }
        new_data = Object.assign(new_data, input_data);
        new_data.version = 1;
        
        return new_data;
    },
};

var version = 1;
module.exports.structure = Object.assign({}, versions[version]);


function get_collection(db) {
    return db.collection('users');
}

function update_latest(doc) {
    return utils.update_latest(versions, version_scripts, version, doc);
}

function public_user(doc) {
    if (!doc) {
        return doc;
    }
    return {
        id: doc._id,
        username: doc.username,
    };
}
module.exports.public_user = public_user;

// Get a single entry
function get_user(db, _id, callback) {
    var collection = get_collection(db);
    
    collection.findOne(
        {'_id': mongodb.ObjectID(_id)},
        function(error, doc) {
            if (error) {
                console.error(error);
                callback(null);
                return;
            }
            if (doc.version) {
                var item = update_latest(doc);
                callback(item);
            } else {
                callback(null);
            }
        }
    );
}
module.exports.get_user = get_user;

function attempt_login(db, username, password, callback) {
    var collection = get_collection(db);
    var query = {
        username: username.toLowerCase(),
        passhash: utils.hash_string(password),
    };
    collection.findOne(
        query,
        function(error, doc) {
            if (error) {
                console.error(error);
                callback(null);
                return;
            }
            if (doc && doc.version) {
                var item = update_latest(doc);
                callback(item);
            } else {
                callback(null);
            }
        }
    );
}
module.exports.attempt_login = attempt_login;

// Create a single entry in the database
function create_account(db, username, password, callback) {
    var collection = get_collection(db);
    
    // Search for duplicate usernames first.
    var query = {
        username: username.toLowerCase(),
    };
    collection.findOne(
        query,
        function(error, doc) {
            if (error) {
                console.error(error);
                var result = {
                    insertedCount: 0,
                    error: 'An error occurred while searching for duplicates.',
                    doc: null,
                };
                callback(result);
                return;
            }
            
            // If there is a duplicate, respond with an error.
            if (doc) {
                var result = {
                    insertedCount: 0,
                    error: 'Account already exists with that username.',
                    doc: null,
                };
                callback(result);
            } else {
                
                // If no duplicates were found, create the new account.
                var data = {
                    username: username.toLowerCase(),
                    passhash: utils.hash_string(password),
                };
                var new_data = utils.create_new(versions[version], version);
                new_data = Object.assign(new_data, data);
                
                collection.insertOne(new_data, function(error, result) {
                    if (error) {
                        console.log(error);
                        result = {
                            insertedCount: 0,
                            error: 'An error occurred during account creation.',
                            doc: null,
                        };
                    } else {
                        result = {
                            insertedCount: result.insertedCount,
                            error: '',
                            doc: result.ops[0],
                        };
                    }
                    callback(result);
                });
            }
        }
    );
    
}
module.exports.create_account = create_account;
