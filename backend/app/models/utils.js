var crypto = require('crypto');

function has_key(data, key) {
    return Object.keys(data).indexOf('version') != -1;
}
module.exports.has_key = has_key;

function update_latest(versions, version_scripts, max_version, data) {
    if (!has_key(data, 'version')) {
        throw Error('A current version must be provided.');
    }
    while (data.version < max_version) {
        data = version_scripts[data.version + 1](data);
    }
    return data;
}
module.exports.update_latest = update_latest;

function hash_string(string, presalt='', postsalt='') {
    var sha512 = crypto.createHash('sha512');
    sha512.update(presalt);
    sha512.update(string);
    sha512.update(postsalt);
    return sha512.digest('hex');
}
module.exports.hash_string = hash_string;

function create_new(base, version) {
    var new_data = Object.assign({}, base);
    for (item of Object.keys(new_data)) {
        new_data[item] = null;
    }
    new_data.version = version;
    return new_data;
}
module.exports.create_new = create_new;
