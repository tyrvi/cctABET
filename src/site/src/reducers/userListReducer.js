import {
    REQUEST_CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    REQUEST_UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    REQUEST_DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    REQUEST_USER_LIST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL
} from '../actions/userListActions.js';

function userListReducer(state ={
    isDoingRequest: false,
    requestMessage: null,
    requestError: null,
    userList: null,
}, action) {
    switch(action.type) {
        case REQUEST_CREATE_USER:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case CREATE_USER_SUCCESS:
            console.log(action);
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: action.response.message,
                requestError: null,
            });
        case CREATE_USER_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: action.response.error,
            });
        case REQUEST_UPDATE_USER:
            return state;
        case UPDATE_USER_SUCCESS:
            return state;
        case UPDATE_USER_FAIL:
            return state;
        case REQUEST_DELETE_USER:
            return state;
        case DELETE_USER_SUCCESS:
            return state;
        case DELETE_USER_FAIL:
            return state;
        case REQUEST_USER_LIST:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case USER_LIST_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                userList: action.response,
            });
        case USER_LIST_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestError: action.response.error
            });
        default:
            return state;
    }
}

export default userListReducer;
