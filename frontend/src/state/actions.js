import axios from 'axios'

const NEW_ENTRY = 'new_entry';

const CREATE_ENTRY_REQUEST = 'create_entry_request';
module.exports.CREATE_ENTRY_REQUEST = CREATE_ENTRY_REQUEST;
const CREATE_ENTRY_SUCCESS = 'create_entry_success';
module.exports.CREATE_ENTRY_SUCCESS = CREATE_ENTRY_SUCCESS;
const CREATE_ENTRY_FAILED = 'create_entry_failed';
module.exports.CREATE_ENTRY_FAILED = CREATE_ENTRY_FAILED;
function create_entry(dispatch, title, content) {
    dispatch({
        type: CREATE_ENTRY_REQUEST,
    });
    var entry = {
        title: title,
        content: content,
    };
    axios.post('/api/blog/entry/create', entry).then(
        (result) => {
            if (result.data.count === 1) {
                dispatch({
                    type: CREATE_ENTRY_SUCCESS,
                    entry: result.data.document,
                });
            } else {
                console.error('Error:', result.data);
            }
        },
        (error) => {
            dispatch({
                type: CREATE_ENTRY_FAILED,
                error: error,
            });
        }
    );
}
module.exports.NEW_ENTRY = NEW_ENTRY;
module.exports.create_entry = create_entry;

const SET_ENTRIES = 'set_entries';
function set_entries(entries) {
    return {
        type: SET_ENTRIES,
        entries: entries,
    }
}
module.exports.SET_ENTRIES = SET_ENTRIES;
module.exports.set_entries = set_entries;

const GET_ENTRIES_REQUEST = 'get_entries_request';
module.exports.GET_ENTRIES_REQUEST = GET_ENTRIES_REQUEST;
const GET_ENTRIES_SUCCESS = 'get_entries_success';
module.exports.GET_ENTRIES_SUCCESS = GET_ENTRIES_SUCCESS;
const GET_ENTRIES_FAILED = 'get_entries_failed';
module.exports.GET_ENTRIES_FAILED = GET_ENTRIES_FAILED;
const GET_ENTRIES = 'get_entries';
module.exports.GET_ENTRIES = GET_ENTRIES;
function get_entries(dispatch, offset) {
    dispatch({
        type: GET_ENTRIES_REQUEST,
    });
    axios.get(`/api/blog/entries/${offset}`).then(
        (result) => {
            var entries = result.data.entries;
            dispatch({
                type: GET_ENTRIES_SUCCESS,
                entries: entries,
            });
        },
        (error) => {
            dispatch({
                type: GET_ENTRIES_FAILED,
                error: error,
            });
        }
    );
}
module.exports.get_entries = get_entries;
