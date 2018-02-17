import {
    REQUEST_LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    CHECKING_LOGGED_IN,
    IS_LOGGED_IN,
    REQUEST_LOGOUT,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS
} from '../actions/loginActions.js';


function loginReducer(state = {
    checkingLoggedIn: false,
    isAuthenticating: false,
    loggedIn: false,
    isLoggingOut: false,
    authError: null,
}, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isAuthenticating: true,
            });
        case LOGIN_FAIL:
            return Object.assign({}, state, {
                isAuthenticating: false,
                loggedIn: false,
                authError: 'invalid credentials',
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticating: false,
                loggedIn: true,
                authError: null,
            });
        case CHECKING_LOGGED_IN:
            return Object.assign({}, state, {
                checkingLoggedIn: true,
            });
        case IS_LOGGED_IN:
            if (action.loggedIn) {
                return Object.assign({}, state, {
                    loggedIn: true,
                    checkingLoggedIn: false,
                });
            } else {
                return Object.assign({}, state, {
                    loggedIn: false,
                    checkingLoggedIn: false,
                });
            }
        case REQUEST_LOGOUT:
            return Object.assign({}, state, {
                isLoggingOut: true,
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isLoggingOut: false,
                loggedIn: false,
            })
        case LOGOUT_FAIL:
            return Object.assign({}, state, {
                isLoggingOut: false,
            })
        default:
            return state;
    }
}

export default loginReducer;
