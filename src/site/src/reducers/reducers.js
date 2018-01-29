import { combineReducers } from 'redux';
import { 
    REQUEST_AUTH,
    AUTH_FAIL,
    AUTH_SUCCESS,
} from '../actions/actions.js';

export function loginReducer(state = {
    isAuthenticating: false,
    isLoggedIn: false,
    authError: null,
}, action) {
    switch (action.type) {
        case REQUEST_AUTH:
            return Object.assign({}, state, {
                isAuthenticating: true,
            });
        case AUTH_FAIL:
            return Object.assign({}, state, {
                isAuthenticating: false,
                isLoggedIn: false,
                authError: 'invalid credentials',
            });
        case AUTH_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticating: false,
                isLoggedIn: true,
                authError: 'invalid credentials',
            });
        default:
            return state;
    }
}

export default combineReducers({
    loginReducer,
})