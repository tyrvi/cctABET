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
<<<<<<< HEAD
    createDBResponse: false,
    insertTestResponse: false,
=======
>>>>>>> 0fe77855524741d34f67c467c5c51b9c800b7d23
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
<<<<<<< HEAD
                createDBResponse: true,
=======
>>>>>>> 0fe77855524741d34f67c467c5c51b9c800b7d23
                createdDB: true,
                requestError: null,
            });
        case CREATE_DB_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
<<<<<<< HEAD
                createDBResponse: true,
=======
>>>>>>> 0fe77855524741d34f67c467c5c51b9c800b7d23
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
<<<<<<< HEAD
                insertTestResponse: true,
=======
>>>>>>> 0fe77855524741d34f67c467c5c51b9c800b7d23
                insertedTestData: true,
                requestError: null,
            });
        case INSERT_TEST_DATA_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
<<<<<<< HEAD
                insertTestResponse: true,
=======
>>>>>>> 0fe77855524741d34f67c467c5c51b9c800b7d23
                insertedTestData: false,
                requestError: action.response.error,
            });
        default:
            return state;
    }
}

export default adminReducer;
