// Javascript version of my base_loader.py

function hasKey(data, key) {
    return Object.keys(data).indexOf('version') != -1;
}

function update_latest(versions, version_scripts, max_version, data) {
    if (!hasKey(data, 'version')) {
        throw Error('A current version must be provided.');
    }
    while (data.version < max_version) {
        data = version_scripts[data.version + 1](data);
    }
    return data;
}

module.exports.update_latest = update_latest;
