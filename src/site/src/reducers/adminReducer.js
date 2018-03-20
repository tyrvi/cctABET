import {
    REQUEST_CREATE_DB,
    CREATE_DB_SUCCESS,
    CREATE_DB_FAIL,
    REQUEST_INSERT_TEST_DATA,
    INSERT_TEST_DATA_SUCCESS,
    INSERT_TEST_DATA_FAIL
} from '../actions/adminActions.js';


// TODO: add handling of udpate user actions
function adminReducer(state = {
    isDoingRequest: false,
    requestMessage: null,
    requestError: null,
}, action) {
    switch (action.type) {
        case REQUEST_CREATE_DB:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case CREATE_DB_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: action.response.message,
                requestError: null,
            });
        case CREATE_DB_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
                requestError: action.response.error,
            });
        case REQUEST_INSERT_TEST_DATA:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case INSERT_TEST_DATA_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: action.response.message,
                requestError: null,
            });
        case INSERT_TEST_DATA_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
                requestError: action.response.error,
            });
        default:
            return state;
    }
}

export default adminReducer;
