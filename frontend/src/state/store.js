import { createStore } from 'redux'
import reducers from './reducers'

let store = createStore(reducers);
console.log(store);

module.exports = store;

// var store_format = {
//     "account": {
//         "username": "string",
//         "access": "string"
//     },
//     "temp": {
//         "posts": [],
//         "current_post": {},
//         "new_post": {
//             "title": "string",
//             "content": "string",
//         }
//     },
//     "location": "string",
// };
