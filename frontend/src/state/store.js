import { createStore } from 'redux'
import reducers from './reducers'


var storage = localStorage.getItem('react_blog');
try {
    storage = JSON.parse(storage);
} catch (e) {
    storage = {};
}
if (!storage || typeof(storage) !== "object") {
    storage = {};
}

let store = createStore(reducers, storage);

var update_storage = function() {
    var json_state = JSON.stringify(store.getState());
    localStorage.setItem('react_blog', json_state);
};
store.subscribe(update_storage);

export default store;

// var store_format = {
//     "account": {
//         "username": "string",
//         "access": "string"
//     },
//     "location": "string",
// };
