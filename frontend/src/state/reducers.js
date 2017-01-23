import actions from './actions.js'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const auth_reducer = (state = {}, action) => {
    console.log({[action.type]: action});
    if (!Object.keys(state).length) {
        state = {
            account: {
                logged_in: false,
                username: null,
            },
        };
    }
    
    var new_state = Object.assign({}, state);
    switch (action.type) {
        case '@@redux/INIT':
            break;
        
        case actions.LOGIN_FAILED:
            new_state.account = {
                logged_in: false,
            };
            break;
            
        case actions.LOGIN_SUCCESS:
            new_state.account = {
                logged_in: true,
                username: action.username,
            };
            break;
        
        case actions.LOGOUT:
            new_state.account = {
                logged_in: false,
            };
            break;
            
        case actions.REGISTER_SUCCESS:
            new_state.account = {
                logged_in: true,
                username: action.username,
            };
            break;
        
        case actions.REGISTER_FAILED:
            new_state.account = {
                logged_in: false,
            };
            break;
            
        default:
            return new_state;
    }
    return new_state;
};

module.exports = combineReducers({
    auth: auth_reducer,
    routing: routerReducer(), // Keeps location in sync with store.
});
