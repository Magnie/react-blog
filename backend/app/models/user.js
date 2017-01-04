var mongodb = require('mongodb');
var base_loader = require('./base_loader');

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
    return base_loader.update_latest(versions, version_scripts, version, doc);
}

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
module.exports.get_entry = get_entry;

// Get a single entry
function get_entries(db, offset, callback) {
    var collection = get_collection(db);
    var limit = 20;
    
    collection.find({}).sort({created: -1}).toArray(function(error, docs) {
        if (error) {
            console.log(error);
            callback([]);
            return;
        }
        var updated_docs = [];
        for (var doc of docs) {
            updated_docs.push(
                update_latest(doc)
            );
        }
        callback(updated_docs);
    });
}
module.exports.get_entries = get_entries;

// Create a single entry in the database
function new_entry(db, data, callback) {
    var collection = get_collection(db);
    
    var new_data = Object.assign({}, versions[version]);
    for (item of Object.keys(new_data)) {
        new_data[item] = null;
    }
    new_data.version = version;
    new_data = Object.assign(new_data, data);
    
    collection.insertOne(new_data, function(error, result) {
        if (error) {
            console.log(error);
            callback(null);
            return;
        }
        callback(result);
    });
}
module.exports.new_entry = new_entry;
