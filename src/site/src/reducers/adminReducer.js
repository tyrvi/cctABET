import {
    REQUEST_CREATE_DB,
    CREATE_DB_SUCCESS,
    CREATE_DB_FAIL,
    REQUEST_INSERT_TEST_DATA,
    INSERT_TEST_DATA_SUCCESS,
    INSERT_TEST_DATA_FAIL
} from '../actions/adminActions.js';


function adminReducer(state = {
    isDoingRequest: false,
    createdDB: false,
    insertedTestData: false,
    requestError: null,
}, action) {
    switch (action.type) {
        case REQUEST_CREATE_DB:
            return Object.assign({}, state, {
                isDoingRequest: true,
            });
        case CREATE_DB_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                createdDB: true,
                requestError: null,
            });
        case CREATE_DB_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                createdDB: false,
                requestError: action.response.error,
            });
        case REQUEST_INSERT_TEST_DATA:
            return Object.assign({}, state, {
                isDoingRequest: true,
            });
        case INSERT_TEST_DATA_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                insertedTestData: true,
                requestError: null,
            });
        case INSERT_TEST_DATA_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                insertedTestData: false,
                requestError: action.response.error,
            });
        default:
            return state;
    }
}

export default adminReducer;
