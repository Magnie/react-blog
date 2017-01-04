import actions from './actions.js'

const reducers = (state = {}, action) => {
    var new_state = Object.assign({}, state);
    console.log(action.type);
    switch (action.type) {
        case actions.GET_ENTRIES_SUCCESS:
            new_state.entries = action.entries;
            return new_state;
        
        case actions.CREATE_ENTRY_SUCCESS:
            var new_entries = state.entries.slice();
            new_entries.unshift(action.entry);
            new_state.entries = new_entries;
            return new_state;
        default:
            return new_state;
    }
};

module.exports = reducers;
