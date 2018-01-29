import { combineReducers } from 'redux';
import { 
    LOG_IN,
    LOG_OUT,
    LOGGING_IN,
    LOGGING_OUT 
} from '../actions/actions.js';

const initialState = {
    loggedIn: false,
    loggingIn: false,
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return state;
        case LOGGING_IN:
            return state;
        case LOG_OUT:
            return state;
        case LOGGING_OUT:
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    loginReducer,
})